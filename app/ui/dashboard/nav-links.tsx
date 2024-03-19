import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { name: 'Home', href: '/', icon: '/home.svg' }, 
  { name: 'Friends', href: '/friends', icon: '/friends.svg' },
];

export default function NavLinks() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      {links.map((link) => {
        const isActive = router.pathname === link.href;
        let className = 'flex h-[32px] items-center justify-start gap-2 rounded-md p-2 text-xs font-medium transition-colors w-full';

        if (isActive) {
          className += ' bg-[#424242] text-white';
        } else {
          className += ' bg-[#091928] text-white';
        }

        return (
          <Link key={link.name} href={link.href} passHref>
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
