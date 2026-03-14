import { PrismaClient, VoiceCategory } from "@/lib/generated/prisma/client";
import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3";
import { PrismaPg } from "@prisma/adapter-pg";
import path from "node:path";
import { fileURLToPath } from "url";
import z from "zod";
import fs from "fs/promises";
import { SYSTEM_VOICE_NAME } from "@/app/(dashboard)/voices/data/voice_list";

const SYSTEM_VOICE_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "system-voices",
);

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  S3_ACCOUNT_ID: z.string().min(1),
  S3_ACCESS_KEY_ID: z.string().min(1),
  S3_SECRET_ACCESS_KEY: z.string().min(1),
  S3_BUCKET_NAME: z.string().min(1),
});

const env = envSchema.parse(process.env);

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: env.S3_ACCESS_KEY_ID,
    secretAccessKey: env.S3_SECRET_ACCESS_KEY,
  },
});

interface VoiceMetadata {
  description: string;
  category: VoiceCategory;
  language: string;
}

const SystemVoicesMetadata: Record<string, VoiceMetadata> = {
  Aaron: {
    description:
      "Aaron is a warm and friendly voice, perfect for conversational and narrative content.",
    category: "CONVERSATIONAL",
    language: "en-US",
  },
  Abigail: {
    description:
      "Abigail is a clear and articulate voice, ideal for corporate and educational content.",
    category: "CORPORATE",
    language: "en-US",
  },
};

async function readSystemVoiceAudio(name: string) {
  const filePath = path.join(SYSTEM_VOICE_DIR, `${name}.wav`);
  const buffer = Buffer.from(await fs.readFile(filePath));

  return { buffer, contentType: "audio/wav" };
}

async function uploadSystemVoiceAudio({
  buffer,
  key,
  contentType,
}: {
  buffer: Buffer;
  key: string;
  contentType: string;
}) {
  const commandInput: PutObjectCommandInput = {
    Bucket: env.S3_BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  };

  await s3.send(new PutObjectCommand(commandInput));
}

async function seedSystemVoice(name: string) {
  const { buffer, contentType } = await readSystemVoiceAudio(name);

  const exixtingSystemVoice = await prisma.voice.findFirst({
    where: {
      varient: "SYSTEM",
      name,
    },
    select: {
      id: true,
    },
  });

  if (exixtingSystemVoice) {
    const s3ObjectKey = `voices/system/${exixtingSystemVoice.id}`;
    const meta = SystemVoicesMetadata[name];

    await uploadSystemVoiceAudio({
      buffer,
      key: s3ObjectKey,
      contentType,
    });

    await prisma.voice.update({
      where: { id: exixtingSystemVoice.id },
      data: {
        s3ObjectKey,
        ...(meta && {
          description: meta.description,
          category: meta.category,
          language: meta.language,
        }),
      },
    });
    return;
  }

  const meta = SystemVoicesMetadata[name];


  const voice = await prisma.voice.create({
    data: {
      name,
      varient: "SYSTEM",
      orgId: null,
      ...(meta && {
        description: meta.description,
        category: meta.category,
        language: meta.language,
      }),
    },
    select: {
        id: true,
    }
  });

  const s3ObjectKey = `voices/system/${voice.id}`;

  try {
    await uploadSystemVoiceAudio({
        buffer,
        key: s3ObjectKey,
        contentType,
    })

    await prisma.voice.update({
        where: { id: voice.id },
        data: { s3ObjectKey },
    })
  } catch (error) {
    await prisma.voice.delete({
        where: { id: voice.id },
    })
    .catch(() => {})
    throw error;
  }
}


async function main() {
    console.log(`seeding ${SYSTEM_VOICE_NAME.length} system voices...`)

    for (const name of SYSTEM_VOICE_NAME) {
        console.log(`seeding system voice: ${name}...`)
        await seedSystemVoice(name);
        console.log(`seeded system voice: ${name}`)
    }

    console.log(`seeded all system voices`)
}


main()
.catch((error) => {
    console.error("Error seeding system voices:", error);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})