import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react';
import ActiveLink from './activeLink/ActiveLink';

interface INavItem {
  path: string;
  title: string;
}

const navItems: INavItem[] = [
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/pricing',
    title: 'Pricing',
  },
  {
    path: '/contact',
    title: 'Contact',
  },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
