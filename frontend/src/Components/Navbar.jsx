// src/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();
  const tokendata = localStorage.getItem("token");
  const userdata = localStorage.getItem("user");
  const [toggle, settoggle] = useState(false);
  const logoutHandler = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    try {
      const res = await axios.post("http://localhost:3000/api/logout", null, { withCredentials: true });
      console.log(res.data);
      if (res.data.success) {
        navigate("/login");
      }
    }
    catch (error) {
      console.log(error.message);
    }

  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="max-w-9xl mx-2  flex justify-between items-center">
        <div className='flex gap-2 '>
          <img src='/src/assets/brain-logo-icon-human-brain-icon-creative-simple-mind-symbol-vector-illustration_118339-6640.avif' width={50} className='rounded-full' />

          <h1 className="text-3xl font-semibold my-auto ">𝓜𝓲𝓷𝓭𝓔𝓪𝓼𝓮</h1>
        </div>

        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/bootcamp"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400"
            >
              Bootcamp
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400"
            >
              Blog
            </Link>
          </li>

          {(tokendata || userdata) ? (
            <div className="relative flex items-center gap-3">
              <FaUser
                className="text-xl cursor-pointer"
                onClick={() => settoggle(!toggle)}
              />
              {toggle && (
                <div className="absolute top-full right-0 mt-4 ml-14 bg-white shadow-lg rounded-lg p-3">
                  <Link to="/dashboard" className="block text-black py-1 px-2 text-sm hover:bg-gray-200 rounded">Dashboard</Link>
                  <button onClick={() => logoutHandler()} className="w-full py-1  bg-blue-500 px-2 mt-2 text-sm hover:bg-blue-800 rounded">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <li>
                <Link
                  to="/signup"
                  className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400"
                >
                  Login
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
