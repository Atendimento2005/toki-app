-- CreateTable
CREATE TABLE "chemistry" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "chapterName" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "chemistry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "maths" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "chapterName" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "maths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physics" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "chapterName" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "physics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" VARCHAR NOT NULL DEFAULT '',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chemistry_id_key" ON "chemistry"("id");

-- CreateIndex
CREATE UNIQUE INDEX "maths_id_key" ON "maths"("id");

-- CreateIndex
CREATE UNIQUE INDEX "physics_id_key" ON "physics"("id");

-- AddForeignKey
ALTER TABLE "chemistry" ADD CONSTRAINT "chemistry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "maths" ADD CONSTRAINT "maths_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "physics" ADD CONSTRAINT "physics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

