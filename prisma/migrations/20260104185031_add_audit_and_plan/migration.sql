-- DropIndex
DROP INDEX "campaigns_id_clientId_idx";

-- DropIndex
DROP INDEX "campaigns_name_clientId_key";

-- DropIndex
DROP INDEX "clients_id_idx";

-- AlterTable
ALTER TABLE "LeadStageHistory" ADD COLUMN     "changedById" INTEGER;

-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "plan" TEXT;

-- CreateIndex
CREATE INDEX "LeadStageHistory_leadId_idx" ON "LeadStageHistory"("leadId");

-- CreateIndex
CREATE INDEX "LeadStageHistory_changedById_idx" ON "LeadStageHistory"("changedById");

-- CreateIndex
CREATE INDEX "campaigns_status_idx" ON "campaigns"("status");

-- CreateIndex
CREATE INDEX "clients_status_idx" ON "clients"("status");

-- CreateIndex
CREATE INDEX "clients_plan_idx" ON "clients"("plan");

-- CreateIndex
CREATE INDEX "leads_id_idx" ON "leads"("id");

-- CreateIndex
CREATE INDEX "leads_status_idx" ON "leads"("status");

-- CreateIndex
CREATE INDEX "leads_funnelStage_idx" ON "leads"("funnelStage");

-- AddForeignKey
ALTER TABLE "LeadStageHistory" ADD CONSTRAINT "LeadStageHistory_changedById_fkey" FOREIGN KEY ("changedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
