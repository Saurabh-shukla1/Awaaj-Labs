/*
  Warnings:

  - You are about to drop the column `r2ObjectKey` on the `Voice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Voice" DROP COLUMN "r2ObjectKey",
ADD COLUMN     "s3ObjectKey" TEXT;
