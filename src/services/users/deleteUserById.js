import { PrismaClient } from "@prisma/client";

const deleteUserById = async (id) => {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.delete({
      where: { id },
    });

    return user ? id : null;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteUserById;
