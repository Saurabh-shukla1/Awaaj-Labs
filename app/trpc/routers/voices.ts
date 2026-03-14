import z from "zod";
import { createTRPCRouter, orgProcedure } from "../init";
import { prisma } from "@/lib/db";
import { TRPCError } from "@trpc/server";
import { deleteAudio } from "@/lib/s3";

export const voicesRouter = createTRPCRouter({
  getAll: orgProcedure
    .input(
      z
        .object({
          query: z.string().trim().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const searchFilter = input?.query
        ? {
            OR: [
              { name: { contains: input.query, mode: "insensitive" as const } },
              {
                description: {
                  contains: input.query,
                  mode: "insensitive" as const,
                },
              },
            ],
          }
        : {};

      const [custom, system] = await Promise.all([
        prisma.voice.findMany({
          where: {
            varient: "CUSTOM",
            orgId: ctx.orgId,
            ...searchFilter,
          },
          orderBy: {
            createdAt: "desc",
          },
          select: {
            id: true,
            name: true,
            description: true,
            varient: true,
            category: true,
            language: true,
          },
        }),
        prisma.voice.findMany({
          where: {
            varient: "SYSTEM",
            ...searchFilter,
          },
          orderBy: {
            createdAt: "desc",
          },
          select: {
            id: true,
            name: true,
            description: true,
            varient: true,
            category: true,
            language: true,
          },
        }),
      ]);

      return { custom, system };
    }),

  delete: orgProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const voice = await prisma.voice.findUnique({
        where: {
          id: input.id,
          varient: "CUSTOM",
          orgId: ctx.orgId,
        },
        select: {
          id: true,
          s3ObjectKey: true,
        },
      });

      if (!voice) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Voice not found",
        });
      }

      await prisma.voice.delete({ where: { id: voice.id } });

      //cleanup S3 object
      if(voice.s3ObjectKey) {
        await deleteAudio(voice.s3ObjectKey).catch((err) => {
            console.error("Failed to delete audio from S3", {
                error: err,
                voiceId: voice.id,
                s3ObjectKey: voice.s3ObjectKey,
            });
        });
      }

      return { success: true };
    }),
});
