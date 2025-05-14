import { getEvents } from '@/lib/utils';
import EventsList from './events-list';

type EventsListWrapperProps = {
  city: string;
  page: number;
};

export default async function EventsListWrapper({
  city,
  page,
}: EventsListWrapperProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : '';

  return <EventsList events={events} previous={previousPath} next={nextPath} />;
}
