import Image from 'next/image';

type EventsPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventsPageProps) {
  const slug = params.slug;
  const APP_URL = process.env.APP_URL;

  const response = await fetch(`${APP_URL}/${slug}`);
  const event = await response.json();
  console.log(event);
  return (
    <main className='h-[100vh]'>
      <section className='relative h-[40%] overflow-hidden'>
        <Image
          src={event.imageUrl}
          alt='Event background image'
          fill
          quality={50}
          sizes='(max-width:1280px), 100vw, 1280px'
          className='object-cover blur-3xl '
        />
      </section>
      <div>second section</div>
    </main>
  );
}
