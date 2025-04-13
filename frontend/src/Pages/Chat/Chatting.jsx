import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Chatting = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const generateChat = async () => {
    setLoading(true); // Set loading to true when starting the request
    try {
      console.log(input);
      const response = await axios.post(
        'http://localhost:3000/api/generate-chat',
        { input: input },
        { withCredentials: true }
      );
      const data = response.data.resp;
      
      const cleanedData = data.replace(/```json\n|\n```/g, '').trim();
      const dataextracted = JSON.parse(cleanedData);
      setAnswer(dataextracted);
    } catch (error) {
      toast.error("You are Unauthorished First Login")

      console.error('Error fetching chat:', error.message);
      setAnswer('An error occurred. Please try again.'); // Provide user feedback on error
    } finally {
      setLoading(false); // Set loading to false when request finishes (success or error)
    }
  };

  useEffect(() => {
    setInput("")
  }, [answer])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

      <h2 className='bg-blue-500 p-2 text-white m-10 font-bold text-xl rounded-xl'>ASK YOUR'S QUEERIES WITH AI</h2>

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">AI Chat</h2>

        <div className="mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI anything..."
            className="border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          onClick={generateChat}
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Generating...' : 'Send'}
        </button>

        {
          console.log(answer)
        }
        {answer && (
          <div className="mt-4 p-3 border rounded-md bg-gray-50">
            <p className="text-gray-800">{answer.responseText}</p>
            <div>
              {answer.suggestions && (
                <>
                  <h1 className="font-semibold text-xl m-2">Suggestions -</h1>
                  {answer.suggestions.map((suggest, indx) => (
                    <div key={indx} className="ml-4 mb-2">
                      <h2 className="text-gray-700">
                        <span className="font-semibold">{indx + 1}.</span> {suggest}
                      </h2>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div>
              {answer.preventions && (
                <>
                  <h1 className="font-semibold text-xl m-2">Preventions -</h1>
                  {answer.preventions.map((prevention, indx) => (
                    <div key={indx} className="ml-4 mb-2">
                      <h2 className="text-gray-700">
                        <span className="font-semibold">{indx + 1}.</span> {prevention}
                      </h2>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Chatting;