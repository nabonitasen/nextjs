import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  currentPath, // This prop will be passed down from each page
}: Readonly<{
  children: React.ReactNode;
  currentPath: string; // Ensure to pass this prop from each page component
}>) {
  // Define a simple function to determine if a link is active
  const isActive = (path: string) => currentPath === path;

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-48 bg-[#091928] p-2.5 text-white">
        <div className="flex items-center mb-6 p-1.5 space-x-2" style={{ marginTop: '7px' }}>
          <Image src="/clerkie.svg" alt="Clerkie Challenge" width={15} height={15} />
          <h1 className="text-xs font-bold">Clerkie Challenge</h1>
        </div>
        
        {/* Home Link */}
        <Link href="/" legacyBehavior>
          <a className={`flex h-[32px] items-center justify-start gap-2 rounded-md p-2 text-xs font-medium transition-colors w-full ${isActive('/') ? 'bg-[#424242] text-white' : 'text-gray-300 hover:bg-[#2C3E50] hover:text-white'}`}>
            <Image src="/home.svg" alt="Home icon" width={18} height={18} />
            <span>Home</span>
          </a>
        </Link>

        {/* Friends Link */}
        <Link href="/friends" legacyBehavior>
          <a className={`flex h-[32px] items-center justify-start gap-2 rounded-md p-2 text-xs font-medium transition-colors w-full ${isActive('/friends') ? 'bg-[#424242] text-white' : 'text-gray-300 hover:bg-[#2C3E50] hover:text-white'}`}>
            <Image src="/friends.svg" alt="Friends icon" width={18} height={18} />
            <span>Friends</span>
          </a>
        </Link>

        {/* Additional links can be added here in a similar manner */}
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}

