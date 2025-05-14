import { EventoEvent } from '@prisma/client';
import EventCard from './event-card';
import PaginationControls from './pagination-controls';

type EventsListProps = {
  events: EventoEvent[];
  next: string;
  previous: string;
};
export default async function EventsList({
  events,
  next,
  previous,
}: EventsListProps) {
  return (
    <section className='flex flex-wrap gap-10 justify-center px-5'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls next={next} previous={previous} />
    </section>
  );
}
