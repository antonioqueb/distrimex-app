/*
  Warnings:

  - A unique constraint covering the columns `[adlCode]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adlCode` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessUnit` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `odooCode` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `pcam` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lpz` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `nac` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `uni` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pnc` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `inventarioCampeche` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tol` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `inventarioAdl` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "adlCode" TEXT NOT NULL,
ADD COLUMN     "businessUnit" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "odooCode" TEXT NOT NULL,
DROP COLUMN "pcam",
ADD COLUMN     "pcam" DOUBLE PRECISION NOT NULL,
DROP COLUMN "lpz",
ADD COLUMN     "lpz" DOUBLE PRECISION NOT NULL,
DROP COLUMN "nac",
ADD COLUMN     "nac" DOUBLE PRECISION NOT NULL,
DROP COLUMN "uni",
ADD COLUMN     "uni" DOUBLE PRECISION NOT NULL,
DROP COLUMN "pnc",
ADD COLUMN     "pnc" DOUBLE PRECISION NOT NULL,
DROP COLUMN "inventarioCampeche",
ADD COLUMN     "inventarioCampeche" DOUBLE PRECISION NOT NULL,
DROP COLUMN "tol",
ADD COLUMN     "tol" DOUBLE PRECISION NOT NULL,
DROP COLUMN "inventarioAdl",
ADD COLUMN     "inventarioAdl" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_adlCode_key" ON "Inventory"("adlCode");

-- CreateIndex
CREATE INDEX "Inventory_adlCode_idx" ON "Inventory"("adlCode");
