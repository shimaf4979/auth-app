-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "role" SET DEFAULT 'client';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'client';
