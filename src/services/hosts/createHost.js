import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createHost = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  const existingHost = await prisma.host.findUnique({
    where: { username },
  });

  if (existingHost) {
    throw new Error("Username is already taken");
  }

  const newHost = {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
    aboutMe,
  };

  try {
    const host = await prisma.host.create({
      data: newHost,
    });
    return host;
  } catch (error) {
    console.error("Error creating host:", error);
    throw new Error("Failed to create host");
  }
};

export default createHost;
