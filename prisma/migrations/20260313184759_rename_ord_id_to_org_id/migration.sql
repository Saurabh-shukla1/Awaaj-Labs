/*
  Warnings:

  - You are about to drop the column `ordId` on the `Generation` table. All the data in the column will be lost.
  - You are about to drop the column `ordId` on the `Voice` table. All the data in the column will be lost.
  - Added the required column `orgId` to the `Generation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Generation_ordId_idx";

-- DropIndex
DROP INDEX "Voice_ordId_idx";

-- AlterTable
ALTER TABLE "Generation" DROP COLUMN "ordId",
ADD COLUMN     "orgId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Voice" DROP COLUMN "ordId",
ADD COLUMN     "orgId" TEXT;

-- CreateIndex
CREATE INDEX "Generation_orgId_idx" ON "Generation"("orgId");

-- CreateIndex
CREATE INDEX "Voice_orgId_idx" ON "Voice"("orgId");
