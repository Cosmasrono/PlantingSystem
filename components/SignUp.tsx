import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

export default function Signup() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const userData = { Email,confirmPassword, password, phoneNumber, };
    // console.log("data", userData);
    
    try {
      const response = await axios.post('http://localhost:8089/Signup', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        alert('signup successful')
        setTimeout(() => {
           window.location.href = '/Login';
        }, 2000);
       
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
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSignup}>
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
       

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"  
        />
         
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button  type='submit'  className="w-full bg-blue-500 text-white py-2 rounded">
          Signup
        </button>
        
        <li>already registered <a href='Login/'><span className=' italic'>login</span></a> </li>
        
        </form>
      </div>
    </div>
  );
}
