import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProperties = async ({ location, pricePerNight, amenities }) => {
  try {
    const filter = {};

    if (location) {
      filter.location = {
        contains: location,
      };
    }

    if (pricePerNight) {
      const price = parseFloat(pricePerNight);
      if (isNaN(price)) {
        throw new Error("Invalid pricePerNight value");
      }
      filter.pricePerNight = {
        equals: price,
      };
    }

    if (amenities) {
      const amenitiesArray = amenities.split(",").map((item) => item.trim());
      if (amenitiesArray.length > 0) {
        filter.amenities = {
          hasSome: amenitiesArray,
        };
      }
    }

    const properties = await prisma.property.findMany({
      where: filter,
    });

    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw new Error("Failed to fetch properties");
  }
};

export default getProperties;
