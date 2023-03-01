/*
  Warnings:

  - You are about to drop the column `averageRating` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `favoritedById` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_favoritedById_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "averageRating",
DROP COLUMN "favoritedById";
