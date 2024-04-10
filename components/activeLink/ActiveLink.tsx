"use client"
import Link from 'next/link';
import React from 'react';

import styles from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  title: string;
}

const ActiveLink = ({ path, title: text }: Props) => {

  const pathname = usePathname();

  console.log(pathname)

  return (
    <Link key={path} className={`${styles.link} ${pathname === path && styles['active-link']}`} href={path}>
      {text}
    </Link>
  );
};

export default ActiveLink;
