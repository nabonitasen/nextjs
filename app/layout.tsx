import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import NavLinks from '@/app/ui/dashboard/nav-links';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-48">
      <div className="flex h-screen flex-col w-48 bg-[#091928] p-2.5 text-white" >
      <div className="flex items-center mb-6 p-1.5 space-x-2" style={{ marginTop: '7px' }}>
        <Image src="/clerkie.svg" alt="Clerkie Challenge" width={15} height={15} />
        <h1 className="text-xs font-bold">Clerkie Challenge</h1>
      </div>
      <NavLinks/>
    </div>
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
