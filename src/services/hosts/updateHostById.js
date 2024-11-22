import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateHostById = async (id, updatedHostData) => {
  if (!isValidUUID(id)) {
    throw new Error("Invalid UUID format for host ID");
  }

  try {
    const updatedHost = await prisma.host.update({
      where: { id },
      data: updatedHostData,
    });
    return updatedHost;
  } catch (error) {
    console.error("Error updating host:", error);
    throw new Error("Failed to update host");
  }
};

export default updateHostById;
