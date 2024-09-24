import React from 'react';
import { useParams } from 'react-router-dom';

const ChatWindow: React.FC = () => {
  const { id } = useParams(); // Get chat ID from URL

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
      <div className="flex items-center justify-center h-full">
        {id ? <h2 className="text-gray-400">Chat ID: {id}</h2> : <h2 className="text-gray-400">Hi, how can I help?</h2>}
      </div>
    </div>
  );
};

export default ChatWindow;
