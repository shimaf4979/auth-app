-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "role" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "role" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" DROP NOT NULL;
