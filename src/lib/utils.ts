import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EventoEvent, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city: string) {
  const APP_URL = process.env.APP_URL;
  const response = await fetch(`${APP_URL}?city=${city}`, {
    next: { revalidate: 300 },
  });
  const events: EventoEvent[] = await response.json();
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return event;
}
