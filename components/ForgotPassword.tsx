"use client";
import { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePassword = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const resetToken = generateResetToken();

    // Send the reset password email with the token
    // const resetPasswordLink = `${window.location.origin}/reset-password?token=${resetToken}`;

    try {
      const response = await axios.post('http://localhost:8080/api/user/forgot-password', {
        email,
        // resetPasswordLink,
      });

      if (response) {
        setMessage('Password reset email sent. Please check your email for further instructions.');
      } else {
        setMessage(response || 'An error occurred while sending the reset email.');
      }
    } catch (error) {
      setMessage('An error occurred while sending the reset email.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handlePassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Email</button>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default ForgotPassword;

function generateResetToken() {
  // Here you can generate a random token or use a library like "uuid"
  // For simplicity, let's generate a random token
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return token;
}
