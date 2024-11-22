import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBookingById = async (id) => {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
    });

    return booking || null;
  } catch (error) {
    console.error(`Error fetching booking with id: ${id}`, error);
    throw new Error(`Error fetching booking with id: ${id}`);
  }
};

export default getBookingById;
