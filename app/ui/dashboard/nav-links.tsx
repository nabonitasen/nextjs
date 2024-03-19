'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { name: 'Home', href: '/', icon: '/home.svg' },
  { name: 'Friends', href: '/friends', icon: '/friends.svg' },
];

export default function NavLinks() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Set the current path based on the window's location
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="flex flex-col">
      {links.map((link) => {
        const isActive = currentPath === link.href;
        let className = 'flex h-[32px] items-center justify-start gap-2 rounded-md p-2 text-xs font-medium transition-colors w-full';

        if (isActive) {
          className += ' bg-[#424242] text-white';
        } else {
          className += ' text-gray-300 hover:bg-[#2C3E50] hover:text-white';
        }

        return (
          <Link key={link.name} href={link.href} legacyBehavior>
            <a className={className}>
              <Image src={link.icon} alt={`${link.name} icon`} width={18} height={18} />
              <span>{link.name}</span>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
