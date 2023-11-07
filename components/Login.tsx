"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios'; // Import Axios

export default function Signup() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const userData = { Email, password, };
    // console.log("data", userData);
    
    try {
      const response = await axios.post('http://localhost:8080/Login', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status==200) {
        setTimeout(() => {
          window.location.href = '/page';
       }, 3000);
      
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', (error as { message: string }).message);
    }
  
    
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button  type='submit'  className="w-full bg-blue-500 text-white py-2 rounded">
          login
        </button>
        </form>
        <ul>Not registered ? <a href='/'><span className=' italic'>SignUp</span></a> </ul>
        <Link href="/ForgotPassword">
        Forgot Password?
      </Link>
      

    


      </div>
    </div>
  );
}
