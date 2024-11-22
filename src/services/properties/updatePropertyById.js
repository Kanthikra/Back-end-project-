import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updatePropertyById = async (id, updatedPropertyData) => {
  try {
    const updatedProperty = await prisma.property.update({
      where: { id },
      data: updatedPropertyData,
    });

    return updatedProperty;
  } catch (error) {
    console.error("Error updating property:", error);
    throw new Error("Failed to update property");
  }
};

export default updatePropertyById;
