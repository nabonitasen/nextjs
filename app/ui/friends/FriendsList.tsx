'use client';

import React, { useState } from 'react';
import FriendRow from './FriendRow';

// Assuming friends data is imported or fetched from a local JSON file
import friendsData from '../../../public/friends.json';

interface Friend {
  id: number;
  name: string;
  group: string;
  email: string;
  phone: string;
}

// If you're sure the structure matches, you can cast it directly
const friends: Friend[] = friendsData as Friend[];

const FriendsList = () => {
  const [filter, setFilter] = useState('');

  const filteredFriends = filter
    ? friends.filter(friend => friend.group === filter)
    : friends;

  return (
    <div className="w-full max-w-3xl">
      {/* Add select dropdown for filtering if needed */}
      {filteredFriends.map((friend) => (
        <FriendRow key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
