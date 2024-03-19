'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { name: 'Home', href: '/', icon: '/icons/home.png' }, 
  { name: 'Friends', href: '/friends', icon: '/icons/friends.png' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link key={link.name} href={link.href}>
            <div
              className={clsx(
                'flex h-[32px] items-center justify-start gap-2 rounded-md p-2 text-xs font-medium transition-colors w-full',
                {
                  'bg-[424242] text-white': isActive,
                  'bg-[#091928] text-white': !isActive, 
                }
              )}
            >
              <Image src={link.icon} alt={`${link.name} icon`} width={18} height={18} />
              <span>{link.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}