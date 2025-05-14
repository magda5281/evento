'use client';
import { EventoEvent } from '@prisma/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className='flex-1 basis-80  max-w-[500px] rounded-lg '
      href={`/event/${event.slug}`}
      //@ts-ignore
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
    >
      <section className=' w-full flex flex-col  bg-white/[3%] relative overflow-hidden  rounded-lg state-effects state-effects:active'>
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className='object-cover'
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
    </MotionLink>
  );
}
