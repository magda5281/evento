import H1 from '@/components/h1';
import SearchForm from '@/components/search-form';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-3 pt-36'>
      <H1> Find events around you</H1>

      <p className='mb-12 mt-7 text-2xl lg:text-3xl opacity-75 text-center'>
        Browse more than{' '}
        <span className='bold italic underline text-accent'>10,000 events</span>{' '}
        around you
      </p>
      <SearchForm />
      <section className=' flex gap-x-4 text-sm text-slate-400'>
        <p>Popular:</p>
        <div className='space-x-2 '>
          <Link href={'/events/seattle'}> Seattle</Link>
          <Link href={'/events/austin'}>Austin</Link>
        </div>
      </section>
    </main>
  );
}
