import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletePropertyById = async (id) => {
  try {
    const property = await prisma.property.delete({
      where: { id },
    });

    return property.id;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw new Error("Failed to delete property");
  }
};

export default deletePropertyById;
