import EventsList from './events-list';
import { EventoEvent } from '@/lib/types';

type EventsListWrapperProps = {
  city: string;
};

export default async function EventsListWrapper({
  city,
}: EventsListWrapperProps) {
  const APP_URL = process.env.APP_URL;
  const response = await fetch(`${APP_URL}?city=${city}`, {
    next: { revalidate: 300 },
  });
  const events: EventoEvent[] = await response.json();

  return <EventsList events={events} />;
}
