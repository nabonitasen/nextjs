import React from 'react';

interface Friend {
  id: number;
  name: string;
  group: string;
  email: string;
  phone: string;
}

const FriendRow: React.FC<{ friend: Friend }> = ({ friend }) => {
  const groupColorClass = friend.group === 'Close Friends' ? 'bg-blue-500' :
                          friend.group === 'Super Close Friends' ? 'bg-green-500' : 'bg-gray-200';

  return (
    <div className="flex flex-col w-full max-w-4xl border border-gray-300 rounded-lg shadow-sm mb-2 bg-white p-6">
      <div className="flex items-center space-x-2 mb-1">
        <span className="font-semibold text-sm">{friend.name}</span>
        {friend.group && (
          <span className={`text-xs font-semibold rounded-full px-2 py-0.5 text-white ${groupColorClass}`}>
            {friend.group}
          </span>
        )}
      </div>
      <div className="text-gray-600 text-xs">
        <span>{friend.email} • {friend.phone}</span>
      </div>
    </div>
  );
};



export default FriendRow;





  