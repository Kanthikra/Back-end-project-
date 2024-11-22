import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateBookingById = async (id, updateData) => {
  try {
    const updatedBooking = await prisma.booking.update({
      where: { id },
      data: updateData,
    });

    return updatedBooking;
  } catch (error) {
    console.error("Error updating booking:", error);
    throw new Error("Booking update failed");
  }
};

export default updateBookingById;
