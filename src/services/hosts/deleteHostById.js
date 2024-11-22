import { PrismaClient } from "@prisma/client";

// Singleton Prisma Client instance
const prisma = new PrismaClient();

const deleteHostById = async (id) => {
  if (!isValidUUID(id)) {
    throw new Error("Invalid UUID format for host ID");
  }

  try {
    const host = await prisma.host.delete({
      where: { id },
    });
    return host.id;
  } catch (error) {
    console.error("Error deleting host:", error);
    throw new Error("Failed to delete host");
  }
};

export default deleteHostById;
