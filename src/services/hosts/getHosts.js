import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHosts = async () => {
  try {
    const hosts = await prisma.host.findMany();
    return hosts;
  } catch (error) {
    console.error("Error fetching hosts:", error);
    throw new Error("Failed to fetch hosts");
  }
};

export default getHosts;
