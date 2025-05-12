import H1 from '@/components/h1';

type EventsPageProps = {
  params: {
    city: string;
  };
};
export default function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  return (
    <main className='flex flex-col items-center px-3 py-24 min-h-[110vh]'>
      <H1>
        {city === 'all'
          ? 'All Events'
          : ` Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
}
