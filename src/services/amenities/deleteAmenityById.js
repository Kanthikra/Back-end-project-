import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteAmenityById = async (id) => {
  try {
    const amenity = await prisma.amenity.delete({
      where: { id },
    });
    return amenity.id;
  } catch (error) {
    console.error("Error deleting amenity:", error);
    throw new Error("Failed to delete amenity");
  }
};

export default deleteAmenityById;
