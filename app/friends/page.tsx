import React from 'react';
import FriendsList from '../ui/friends/FriendsList';

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="w-full flex items-center shadow-sm" style={{ height: '64px' }}>  {/* Lighter shadow and class name change */}
        <h1 className="text-xs px-4 font-bold" style={{ fontSize: '0.875em' }}>Friends</h1>  {/* Smaller font size, padding, and class name change */}
      </header>

      {/* Main content with flexbox to center "FriendsList" vertically and padding at the top */}
      <main className="flex-grow flex flex-col items-center pt-8 overflow-auto">
        <FriendsList />
      </main>
    </div>
  );
}
``


