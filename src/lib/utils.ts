import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EventoEvent } from './types';

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
  const APP_URL = process.env.APP_URL;
  const response = await fetch(`${APP_URL}/${slug}`);
  const event = await response.json();
  return event;
}
