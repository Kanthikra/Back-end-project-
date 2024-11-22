import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAmenity = async (name) => {
  const newAmenity = {
    name,
  };

  try {
    const amenity = await prisma.amenity.create({
      data: newAmenity,
    });
    return amenity;
  } catch (error) {
    console.error("Error creating amenity:", error);
    throw new Error("Failed to create amenity");
  }
};

export default createAmenity;
