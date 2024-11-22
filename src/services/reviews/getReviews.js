import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviews = async (userId, propertyId) => {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        ...(userId && { userId }),
        ...(propertyId && { propertyId }),
      },
    });

    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews");
  }
};

export default getReviews;
