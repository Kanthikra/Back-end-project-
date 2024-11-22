import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateReviewById = async (id, updatedReviewData) => {
  try {
    const updatedReview = await prisma.review.update({
      where: { id },
      data: updatedReviewData,
    });

    return updatedReview;
  } catch (error) {
    console.error("Error updating review:", error);
    throw new Error("Failed to update review");
  }
};

export default updateReviewById;
