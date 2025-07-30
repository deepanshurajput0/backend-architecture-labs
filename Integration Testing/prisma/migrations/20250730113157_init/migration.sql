-- CreateEnum
CREATE TYPE "public"."Type" AS ENUM ('ADD', 'MUL');

-- CreateTable
CREATE TABLE "public"."Request" (
    "id" SERIAL NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL,
    "type" "public"."Type" NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
