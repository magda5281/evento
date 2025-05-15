import EventsListWrapper from '@/components/events-list-wrapper';
import EventsListLoading from '@/components/EventsListLoading';
import H1 from '@/components/h1';
import { capitalize } from '@/lib/utils';
import { Metadata } from 'next';

import { Suspense } from 'react';
import { z } from 'zod';

type Props = {
  params: {
    city: string;
  };
};
type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === 'all' ? 'All Events' : ` Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const page = pageNumberSchema.safeParse(searchParams.page);
  if (!page.success) {
    throw new Error('Invalid page number');
  }
  return (
    <main className='flex flex-col items-center px-3 py-24 min-h-[110vh] '>
      <H1 className={'mb-10 sm:mb-28'}>
        {city === 'all' ? 'All Events' : ` Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + page} fallback={<EventsListLoading />}>
        <EventsListWrapper city={city} page={page.data} />
      </Suspense>
    </main>
  );
}
