import SkeletonCard from '@/components/skeleton-card';

export default function EventsListLoading() {
  return (
    <div className='flex flex-wrap gap-20 max-w-7xl mx-auto justify-center p-5'>
      {Array.from({ length: 5 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
