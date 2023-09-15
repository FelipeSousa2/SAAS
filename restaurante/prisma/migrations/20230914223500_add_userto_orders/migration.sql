/*
  Warnings:

  - Added the required column `useEmail` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "useEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_useEmail_fkey" FOREIGN KEY ("useEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
