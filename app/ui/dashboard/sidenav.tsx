import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-screen flex-col w-48 bg-[#091928] p-2.5 text-white" >
      <div className="flex items-center mb-6 p-1.5 space-x-2" style={{ marginTop: '7px' }}>
        <Image src="/clerkie.svg" alt="Clerkie Challenge" width={15} height={15} />
        <h1 className="text-xs font-bold">Clerkie Challenge</h1>
      </div>
    </div>
  );
}

