import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";
import { env } from "./env";

// Initialize Prisma Client with PostgreSQL adapter
const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});    


// Ensure that we only have a single instance of Prisma Client in development to prevent exhausting database connections
const globalForPrisma = global as unknown as { prisma: PrismaClient };


// If the Prisma Client instance already exists, use it. Otherwise, create a new one.
const prisma = globalForPrisma.prisma || new PrismaClient({adapter});

// In development, assign the Prisma Client instance to the global object to reuse it across hot reloads. In production, we can safely create a new instance.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };