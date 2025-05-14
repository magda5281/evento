import { getEvents } from '@/lib/utils';
import EventsList from './events-list';

type EventsListWrapperProps = {
  city: string;
};

export default async function EventsListWrapper({
  city,
}: EventsListWrapperProps) {
  const events = await getEvents(city);

  return <EventsList events={events} />;
}
