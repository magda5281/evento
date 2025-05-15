'use client'; // Error boundaries must be Client Components

import H1 from '@/components/h1';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className='text-center mt-32'>
      <H1 className='mb-6'>Something went wrong!</H1>
      <button
        className='bg-white/15 p-4 rounded-md hover:bg-white/25 '
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
