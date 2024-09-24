"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your form submission logic
    // e.g., send email to your API or service
    
    setSubmitted(true);
    setTimeout(() => {
      router.push('https://unequaledchair.com/b.3RVE0oP/3mpJv/bamfVXJ_ZJDD0/1CNeT/gQyZOCDsE/4/LuTzUB1-OgDCI/4bMhTHkE')
    }, 500)
  };

  return (
    <div style={{direction: "ltr"}} className="flex items-center justify-center min-h-screen bg-dark absolute top-0 left-0 max-w-screen w-full z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4">
          How To Make An Additional $1,000 - $3,000 Per Day In Passive Income On Complete Autopilot In 2024...
        </h1>
        <p className="text-lg text-center mb-6">
          ...Without expensive costs or tech-y skills.
        </p>
        {submitted ? (
          <p className="text-green-600 text-center">Thank you for signing up!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 mb-4 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Get Started
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
