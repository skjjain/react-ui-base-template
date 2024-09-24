import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim()) {
      console.log('Send message:', message);
      navigate(`/chat/${Math.random()}`); // Navigate to a new chat after sending the message
      setMessage('');
    }
  };

  return (
    <div className="p-4 bg-gray-800 border-t border-gray-700">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="w-full bg-gray-700 p-2 rounded-lg outline-none text-white"
          placeholder="Message ChatGPT"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;