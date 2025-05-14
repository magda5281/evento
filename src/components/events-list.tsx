import { EventoEvent } from '@/lib/types';
import EventCard from './event-card';

type EventsListProps = {
  events: EventoEvent[];
};
export default async function EventsList({ events }: EventsListProps) {
  return (
    <section className='flex flex-wrap gap-10 justify-center px-5'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
