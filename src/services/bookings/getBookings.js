import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBookings = async ({ userId, bookingStatus }) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId,
        bookingStatus,
      },
    });
    return bookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings");
  }
};

export default getBookings;
