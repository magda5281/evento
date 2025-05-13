import { EventoEvent } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      className='flex-1 basis-80  max-w-[500px] rounded-lg '
      href={`/event/${event.slug}`}
    >
      <section className=' w-full flex flex-col  bg-white/[3%] relative overflow-hidden  rounded-lg state-effects'>
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className='object-fit'
        />

        <div className='flex flex-col flex-1 items-center justify-center'>
          <h2 className='text-1xl font-semibold'>{event.name}</h2>
          <p className='italic text-white/75 '>{event.organizerName}</p>
          <p className='text-sm text-white/50 mt-4'>{event.location}</p>
        </div>

        <section className='absolute left-2 top-2 sm:left-3 sm:top-3 bg-black/30  p-2 rounded-md flex flex-col justify-center items-center'>
          <p className='text-xl font-bold -mb-1'>
            {new Date(event.date).toLocaleDateString('en-US', {
              day: '2-digit',
            })}
          </p>
          <p className='text-xs uppercase text-accent'>
            {new Date(event.date).toLocaleDateString('en-US', {
              month: 'short',
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
