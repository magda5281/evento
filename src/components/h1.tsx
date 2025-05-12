import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';

type H1props = {
  children: React.ReactNode;
  className: string;
};
export default function H1({ children, className }: H1props) {
  return (
    <h1 className={cn('text-3xl lg:text-6xl font-tracking-tight', className)}>
      {children}
    </h1>
  );
}
