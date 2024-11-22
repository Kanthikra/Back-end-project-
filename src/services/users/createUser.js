import { PrismaClient } from "@prisma/client";

const createUser = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  try {
    const newUser = {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
    };

    const prisma = new PrismaClient();

    const user = await prisma.user.create({
      data: newUser,
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User creation failed");
  } finally {
    await prisma.$disconnect();
  }
};

export default createUser;
