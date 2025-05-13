import Skeleton from './skeleton';

export default function SkeletonCard() {
  return (
    <div className='flex flex-col justify-between items-center space-y-4'>
      <Skeleton className='flex-1 basis-20  max-w-[500px] ' />
      <Skeleton className='h-4 w-60 ' />
      <Skeleton className='h-4 w-32 ' />
      <Skeleton className='h-4 w-44 ' />
    </div>
  );
}
