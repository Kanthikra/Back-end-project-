import { PrismaClient } from "@prisma/client";

const deleteBookingById = async (id) => {
  const prisma = new PrismaClient();

  try {
    const booking = await prisma.booking.delete({
      where: { id },
    });

    return booking ? id : null;
  } catch (error) {
    console.error("Error deleting booking:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteBookingById;
