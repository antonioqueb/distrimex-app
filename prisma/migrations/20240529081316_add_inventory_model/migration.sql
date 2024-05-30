-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "pcam" TEXT NOT NULL,
    "lpz" TEXT NOT NULL,
    "nac" TEXT NOT NULL,
    "uni" TEXT NOT NULL,
    "pnc" TEXT NOT NULL,
    "inventarioCampeche" TEXT NOT NULL,
    "tol" TEXT NOT NULL,
    "inventarioAdl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);
