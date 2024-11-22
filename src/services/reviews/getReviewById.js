import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviewById = async (id) => {
  try {
    const review = await prisma.review.findUnique({
      where: { id },
    });

    return review;
  } catch (error) {
    console.error("Error fetching review by ID:", error);
    throw new Error("Failed to fetch review");
  }
};

export default getReviewById;
