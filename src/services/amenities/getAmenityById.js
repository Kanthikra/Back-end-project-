import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAmenityById = async (id) => {
  try {
    const amenity = await prisma.amenity.findUnique({
      where: { id },
    });
    return amenity;
  } catch (error) {
    console.error("Error fetching amenity by ID:", error);
    throw new Error("Failed to fetch amenity");
  }
};

export default getAmenityById;
