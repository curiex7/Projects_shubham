import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function assignAgentToOrder(pickupZoneId: string, orderId: string) {
  // Find an agent assigned to the pickup zone
  const availableAgents = await prisma.user.findMany({
    where: {
      role: 'AGENT',
      zoneId: pickupZoneId,
    },
  });

  if (availableAgents.length === 0) {
    // If no agent in pickup zone, maybe assign randomly or leave unassigned
    // For now, let's leave unassigned or just pick any agent as fallback
    const fallbackAgents = await prisma.user.findMany({
      where: { role: 'AGENT' },
      take: 1,
    });
    
    if (fallbackAgents.length > 0) {
      return fallbackAgents[0].id;
    }
    return null; // No agents available
  }

  // Simple auto-assignment: Pick the first available agent
  // In a real scenario, we'd check their current workload or location
  const selectedAgentId = availableAgents[0].id;

  return selectedAgentId;
}
