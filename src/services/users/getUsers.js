import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};

export default getUsers;
