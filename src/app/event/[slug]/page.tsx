import H1 from '@/components/h1';
import { sleep } from '@/lib/utils';
import Image from 'next/image';

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const APP_URL = process.env.APP_URL;
  const response = await fetch(`${APP_URL}/${slug}`);
  const event = await response.json();

  return (
    <main>
      <section className='relative  overflow-hidden flex justify-center items-center py-14 md:py-20 '>
        <Image
          src={event.imageUrl}
          alt='Event background image'
          fill
          quality={50}
          sizes='(max-width:1280px), 100vw, 1280px'
          className='object-cover blur-3xl z-0'
        />
        <div className='z-1 relative flex flex-col justify-center   sm:flex-row gap-4 lg:gap-16'>
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className='rounded-xl border-2/50 object-cover'
          />
          <div className='flex flex-col gap-4'>
            <p className='text-white/75 '>
              {new Date(event.date).toLocaleDateString('en-UK', {
                weekday: 'long',
              })}
              ,{' '}
              {new Date(event.date).toLocaleDateString('en-UK', {
                month: 'long',
                day: '2-digit',
              })}
            </p>
            <H1 className=' whitespace-nowrap lg:text-5xl'>{event.name}</H1>
            <p className='whitespace-nowrap text-xl text-white/75'>
              Organized by <span className='italic'>{event.organizerName}</span>
            </p>
            <button className='bg-white/20 text-lg capitalize sm:mt-auto  py-2 border-white/10 border-2 rounded-md bg-blur state-effects state-effects:active'>
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className='text-center min-h-[75vh] flex flex-col gap-6'>
        <Section h2='About this event' p={event.description} />
        <Section h2='Location' p={event.location} />
      </div>
    </main>
  );
}
type SectionProps = {
  h2: string;
  p: string;
};
function Section({ h2, p }: SectionProps) {
  return (
    <section>
      <h2 className='text-2xl mb-8'>{h2}</h2>
      <p className='max-w-4xl mx-auto text-lg leading-8 text-white/75'>{p}</p>
    </section>
  );
}
