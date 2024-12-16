/*
  Warnings:

  - Added the required column `role` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "role" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL;
