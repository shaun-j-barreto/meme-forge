/*
  Warnings:

  - You are about to drop the column `fontColor` on the `Meme` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Meme" DROP COLUMN "fontColor",
ALTER COLUMN "topText" DROP NOT NULL,
ALTER COLUMN "bottomText" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
