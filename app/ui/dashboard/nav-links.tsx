import Link from 'next/link';
import Image from 'next/image';

const links = [
  { name: 'Home', href: '/', icon: '/home.svg' }, 
  { name: 'Friends', href: '/friends', icon: '/friends.svg' },
];

export default function NavLinks() {
  return (
    <div className="flex flex-col">
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <div
            className="flex h-[32px] items-center justify-start gap-2 rounded-md p-2 text-xs font-medium transition-colors w-full hover:bg-[#222222]"
          >
            <Image src={link.icon} alt={`${link.name} icon`} width={18} height={18} />
            <span>{link.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
