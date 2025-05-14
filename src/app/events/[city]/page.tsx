import EventsListWrapper from '@/components/events-list-wrapper';
import EventsListLoading from '@/components/EventsListLoading';
import H1 from '@/components/h1';
import { capitalize } from '@/lib/utils';
import { Metadata } from 'next';

import { Suspense } from 'react';

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === 'all' ? 'All Events' : ` Events in ${capitalize(city)}`,
  };
}

export default async function EventsPage({ params }: Props) {
  const city = params.city;

  return (
    <main className='flex flex-col items-center px-3 py-24 min-h-[110vh] '>
      <H1 className={'mb-10 sm:mb-28'}>
        {city === 'all' ? 'All Events' : ` Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<EventsListLoading />}>
        <EventsListWrapper city={city} />
      </Suspense>
    </main>
  );
}
