import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateAmenityById = async (id, updatedAmenityData) => {
  try {
    const updatedAmenity = await prisma.amenity.update({
      where: { id },
      data: updatedAmenityData,
    });
    return updatedAmenity;
  } catch (error) {
    console.error("Error updating amenity:", error);
    throw new Error("Failed to update amenity");
  }
};

export default updateAmenityById;
