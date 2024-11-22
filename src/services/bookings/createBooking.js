import { PrismaClient } from "@prisma/client";

const createBooking = async (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const prisma = new PrismaClient();

  try {
    const booking = await prisma.booking.create({
      data: {
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus,
      },
    });

    return booking;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default createBooking;
