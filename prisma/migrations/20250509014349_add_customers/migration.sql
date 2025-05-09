/*
  Warnings:

  - You are about to drop the column `identificacion` on the `customer` table. All the data in the column will be lost.
  - Added the required column `identification` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `identificacion`,
    ADD COLUMN `identification` VARCHAR(191) NOT NULL;
