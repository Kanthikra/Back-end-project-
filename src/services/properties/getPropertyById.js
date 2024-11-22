import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPropertyById = async (id) => {
  try {
    const property = await prisma.property.findUnique({
      where: { id },
    });

    return property;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw new Error("Failed to fetch property");
  }
};

export default getPropertyById;
