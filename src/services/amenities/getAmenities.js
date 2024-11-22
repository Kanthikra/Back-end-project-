import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAmenities = async () => {
  try {
    const amenities = await prisma.amenity.findMany();
    return amenities;
  } catch (error) {
    console.error("Error fetching amenities:", error);
    throw new Error("Failed to fetch amenities");
  }
};

export default getAmenities;
