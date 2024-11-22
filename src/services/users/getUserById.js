import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user || null;
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw new Error("Failed to retrieve user");
  } finally {
    await prisma.$disconnect();
  }
};

export default getUserById;
