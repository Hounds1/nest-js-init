-- CreateTable
CREATE TABLE "TeamMember" (
    "memberId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("memberId")
);
