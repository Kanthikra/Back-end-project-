import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProperty = async (
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestCount,
  hostId,
  rating
) => {
  const newProperty = {
    title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestCount,
    hostId,
    rating,
  };

  try {
    const property = await prisma.property.create({
      data: newProperty,
    });

    return property;
  } catch (error) {
    console.error("Error creating property:", error);
    throw new Error("Failed to create property");
  }
};

export default createProperty;
