import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateUserById = async (id, updatedUser) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: updatedUser,
    });

    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};

export default updateUserById;
