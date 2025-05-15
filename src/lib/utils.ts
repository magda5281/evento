import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import prisma from './db';
import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const filter =
    city === 'all'
      ? undefined // No filter → get all events
      : {
          city: {
            equals: capitalize(city),
          },
        };

  const events = await prisma.eventoEvent.findMany({
    where: filter,
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: filter,
  });

  return {
    events,
    totalCount,
  };
});
export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
});

export async function getAllEventSlugs() {
  const slugs = await prisma.eventoEvent.findMany({
    select: {
      slug: true,
    },
  });

  return slugs; // [{ slug: 'event-1' }, { slug: 'event-2' }, ...]
}
