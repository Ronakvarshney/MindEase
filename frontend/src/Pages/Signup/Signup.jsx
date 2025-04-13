import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    

    try {
      let logindata = null ;
      const userdata = localStorage.getItem("user");
      if(userdata){
        logindata = JSON.parse(userdata);
      }


      
      const datatosend = logindata? logindata :  formData;

      const res = await axios.post("http://localhost:3000/api/register", { data: datatosend } , {withCredentials : true});

      if (res.data.success) {
        if(datatosend == logindata){
          navigate("/");
        }
        else{
          navigate("/login"); 
        }
       
      }
    } catch (error) {
      console.log(error.message);
    }


    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  const login = useGoogleLogin({
    onSuccess: (elm) => GetUserProfile(elm),
    onError: (error) => console.log(error)
  });

  const GetUserProfile = async (tokenInfo) => {
    try {
      const resp = await axios.get(`
        https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      );

      const userData = resp.data;
      localStorage.setItem("user", JSON.stringify(userData));
      
      handleSubmit();

    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

  

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>

        <p className="text-gray-500 text-center my-4">---or---</p>

        <div className="flex items-center justify-center">
          <button className="w-full sm:w-80 bg-blue-500 text-white rounded-lg
           p-2 flex items-center justify-center hover:bg-blue-600 focus:outline-none 
           focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => login()}>
            Login with Google <FcGoogle className="ml-2 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
