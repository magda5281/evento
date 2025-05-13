import { cn } from '@/lib/utils';

type SkeletonProps = {
  className?: string;
};
export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse w-2/3 h-4 rounded-md bg-white/50',
        className
      )}
    />
  );
}
