import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async (userId, propertyId, comment, rating) => {
  const newReview = {
    userId,
    propertyId,
    comment,
    rating,
  };

  try {
    const review = await prisma.review.create({
      data: newReview,
    });

    return review;
  } catch (error) {
    console.error("Error creating review:", error);
    throw new Error("Failed to create review");
  }
};

export default createReview;
