import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header with exact height and drop shadow, no border */}
      <header className="w-full flex items-center shadow-sm" style={{ height: '60px' }}>  {/* Lighter shadow and class name change */}
        <h1 className="text-xs px-4 font-bold" style={{ fontSize: '0.875em' }}>Home</h1>  {/* Smaller font size, padding, and class name change */}
      </header>

      {/* Main content with flexbox to center "Welcome" message vertically */}
      <main className="flex-grow flex flex-col justify-center items-center">  {/* Added flex-col and justify-center */}
        <p className="text-center text-xl font-semibold" style={{ fontFamily: 'Inter, sans-serif', marginBottom: '85px' }}>
          Welcome to the Clerkie Challenge!
        </p>
      </main>
    </div>
  );
}
