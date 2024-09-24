import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Define Routes for Chat Pages */}
        <div className="flex flex-col flex-1">
          <Routes>
            <Route path="/" element={<ChatWindow />} />
            <Route path="/chat/:id" element={<ChatWindow />} />
            {/* Add more routes as necessary */}
          </Routes>

          {/* Message Input at the bottom */}
          <MessageInput />
        </div>
      </div>
    </Router>
  );
};

export default App;
