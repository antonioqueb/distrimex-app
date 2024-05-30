/*
  Warnings:

  - Added the required column `productPrice` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uMeasure` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "productPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "uMeasure" TEXT NOT NULL;
