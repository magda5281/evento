import EventsListWrapper from '@/components/events-list-wrapper';
import EventsListLoading from '@/components/EventsListLoading';
import H1 from '@/components/h1';
import { Suspense } from 'react';

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  return (
    <main className='flex flex-col items-center px-3 py-24 min-h-[110vh] '>
      <H1 className={'mb-10 sm:mb-28'}>
        {city === 'all'
          ? 'All Events'
          : ` Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <Suspense fallback={<EventsListLoading />}>
        <EventsListWrapper city={city} />
      </Suspense>
    </main>
  );
}
