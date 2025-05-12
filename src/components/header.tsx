'use client';
import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'All Events',
    path: '/events/all',
  },
];
export default function Header() {
  const activePathName = usePathname();
  return (
    <header className='flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9'>
      <Logo />
      <ul className='flex gap-x-6 text-sm sm:text-md'>
        {routes.map((route) => (
          <li
            key={route.path}
            className={clsx('hover:text-white transition', {
              'text-white': activePathName === route.path,
              'text-white/50': activePathName !== route.path,
            })}
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
