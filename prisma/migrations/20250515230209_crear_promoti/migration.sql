/*
  Warnings:

  - Added the required column `proveedorId` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `proveedorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_proveedorId_fkey` FOREIGN KEY (`proveedorId`) REFERENCES `proveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
