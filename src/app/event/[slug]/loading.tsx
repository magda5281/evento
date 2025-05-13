import Skeleton from '@/components/skeleton';

export default function Loading() {
  return (
    <div className=' flex flex-col  justify-center items-center gap-4 py-14 md:py-20 max-w-7xl '>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
        <Skeleton className='h-20 min-w-32' />
        <Skeleton className='h-20  min-w-60' />
      </div>

      <Skeleton className='h-10 min-w-32' />
      <Skeleton className='h-10 min-w-32' />
    </div>
  );
}
