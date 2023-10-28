// pages/forgot-password.js
import { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Generate a reset token (you can use a package like 'crypto')
    const resetToken = generateResetToken();

    // Send the reset password email with the token
    const resetPasswordLink = `${window.location.origin}/reset-password?token=${resetToken}`;

    // Send the email using your server
    const response = await fetch('http://localhost:8089/resetMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, resetPasswordLink }),
    });

    if (response.status === 200) {
      setMessage('Password reset email sent. Please check your email for further instructions.');
    } else {
      const data = await response.json();
      setMessage(data.error || 'An error occurred while sending the reset email.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
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
  throw new Error('Function not implemented.');
}

