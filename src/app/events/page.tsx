import { prisma } from "@/lib/prisma";
import EventsClient from "@/components/EventsClient";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: {
      eventDate: "asc",
    },
  });

  return <EventsClient events={events} />;
}