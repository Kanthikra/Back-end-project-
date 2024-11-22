import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteReviewById = async (id) => {
  try {
    const review = await prisma.review.delete({
      where: { id },
    });

    return review.id;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw new Error("Failed to delete review");
  }
};

export default deleteReviewById;
