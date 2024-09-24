import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 p-4">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">ChatGPT</h1>
      </div>

      {/* Options Section */}
      <ul className="space-y-3">
        <li>
          <Link to="/" className="block py-2 px-3 bg-gray-700 rounded-lg">
            ChatGPT
          </Link>
        </li>
        <li>
          <Link to="/chat/1" className="block py-2 px-3 bg-gray-700 rounded-lg">
            Chat 1
          </Link>
        </li>
        <li>
          <Link to="/chat/2" className="block py-2 px-3 bg-gray-700 rounded-lg">
            Chat 2
          </Link>
        </li>
        {/* Add more items similarly */}
      </ul>

      <div className="mt-10">
        <h2 className="text-gray-400 text-sm">Previous 7 Days</h2>
        <ul className="space-y-3 mt-2">
          <li>
            <Link to="/chat/3" className="block py-2 px-3 bg-gray-700 rounded-lg">
              Chat 3
            </Link>
          </li>
          {/* Add more items similarly */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
