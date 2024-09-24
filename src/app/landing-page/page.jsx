import React, { useState } from 'react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your form submission logic
    // e.g., send email to your API or service
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
