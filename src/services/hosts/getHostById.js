import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHostById = async (id) => {
  if (!isValidUUID(id)) {
    throw new Error("Invalid UUID format for host ID");
  }

  try {
    const host = await prisma.host.findUnique({
      where: { id },
    });
    if (!host) {
      throw new Error("Host not found");
    }
    return host;
  } catch (error) {
    console.error("Error fetching host by ID:", error);
    throw new Error("Failed to fetch host");
  }
};

const isValidUUID = (id) => {
  const uuidPattern =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidPattern.test(id);
};

export default getHostById;
