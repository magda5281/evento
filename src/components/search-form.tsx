'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';

const citySchema = z
  .string()
  .trim()
  .min(2, 'City name must be at least 2 characters')
  .regex(/^[a-zA-Z\s\-'.]+$/, 'Enter a valid city name');

export default function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const isValidCity = citySchema.safeParse(searchText).success;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidCity) return;
    router.push(`/events/${searchText}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='w-full sm:w-[36.25rem] '>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='w-full h-12 sm:h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10'
          placeholder='Search events in any city...'
          spellCheck={false}
        />
        <div className='min-h-[1.25rem] mt-2'>
          {searchText && !isValidCity && (
            <p className='text-red-500 italic text-sm'>Enter valid city name</p>
          )}
        </div>
      </form>
    </>
  );
}
