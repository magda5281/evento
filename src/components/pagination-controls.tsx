import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const btnStyles =
  'text-white px-5 py-3 bg-white/15 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm';

type PaginationControlProps = {
  next: string;
  previous: string;
};

export default function PaginationControls({
  next,
  previous,
}: PaginationControlProps) {
  return (
    <section className='flex justify-between w-full'>
      {previous ? (
        <Link href={previous} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link href={next} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
