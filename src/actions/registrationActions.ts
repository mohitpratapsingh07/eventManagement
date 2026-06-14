"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function registerForEvent(
  userId: string,
  eventId: string
) {
  try {
    // Prevent duplicate registration
    const existingRegistration =
      await prisma.registration.findUnique({
        where: {
          userId_eventId: {
            userId,
            eventId,
          },
        },
      });

    if (existingRegistration) {
      return {
        success: false,
        message: "Already registered",
      };
    }

    await prisma.registration.create({
      data: {
        userId,
        eventId,
      },
    });

    return {
      success: true,
      message: "Registration successful",
    };
  } catch (error) {
  console.error(error);

  return {
    success: false,
    message: String(error),
  };
}
}

export async function getUserRegistrations(
  userId: string
) {
  return await prisma.registration.findMany({
    where: {
      userId,
    },
    include: {
      event: true,
    },
  });
}

export async function cancelRegistration(
  registrationId: string
) {
  await prisma.registration.delete({
    where: {
      id: registrationId,
    },
  });

  revalidatePath("/dashboard/my-events");
}