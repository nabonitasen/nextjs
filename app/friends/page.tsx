import React from 'react';
//import FriendsList from './FriendsList';

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header with exact height and drop shadow, no border */}
      <header className="w-full flex items-center shadow-sm" style={{ height: '60px' }}>  {/* Lighter shadow and class name change */}
        <h1 className="text-xs px-4 font-bold" style={{ fontSize: '0.875em' }}>Friends</h1>  {/* Smaller font size, padding, and class name change */}
      </header>

      {/* Main content with flexbox to center "Welcome" message vertically */}
      <main className="flex-grow flex flex-col justify-center items-center">  {/* Added flex-col and justify-center */}
        <div className="container">
          <h1>Friends List</h1>
            
        </div>
      </main>
    </div>
  );
}
