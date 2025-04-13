// src/LoginPage.jsx

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/login", { email, password }, { withCredentials: true });
      console.log(res.data);
      console.log(res.data.token);
      if(res.data.success){
      localStorage.setItem("token", res.data.token);
      navigate("/");
      }
      else{
        toast.error("email doesn't exists, first register")
      }


    }
    catch (error) {
      console.log(error.message);
    }
    // Handle the login logic here, like sending data to the server
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>

          {/* Extra Links */}
          <div className="flex justify-between text-sm text-gray-600">
            <a href="/forgot-password" className="hover:text-indigo-600">Forgot Password?</a>
            <span>
              Don't have an account?{' '}
              <a href="/signup" className="text-indigo-600 hover:text-indigo-800">Sign Up</a>
            </span>
          </div>
          
        </form>
      </div>
     
      <ToastContainer/>
    </div>
  );
};

export default LoginPage;
