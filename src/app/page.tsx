import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-3 '>
      <h1 className='text-3xl lg:text-6xl font-tracking-tight'>
        Find events around you
      </h1>
      <p className='mb-12 mt-7 text-2xl lg:text-3xl opacity-75 text-center'>
        Browse more than{' '}
        <span className='bold italic underline text-accent'>10,000 events</span>{' '}
        around you
      </p>
      <form className='w-full sm:w-[36.25rem] '>
        <input
          className='w-full h-12 sm:h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10'
          placeholder='Search events in any city...'
          spellCheck={false}
        />
      </form>
      <section className='mt-4 flex gap-x-4 text-sm text-white/50'>
        <p>Popular:</p>
        <div className='space-x-2 '>
          <Link href={'/events/seattle'}> Seattle</Link>
          <Link href={'/events/austin'}>Austin</Link>
        </div>
      </section>
    </main>
  );
}
