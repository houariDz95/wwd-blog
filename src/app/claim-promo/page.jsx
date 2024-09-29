
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export const metadata = {
  title: "Claim 4,000 Advertising Credits | My Click Central Promo Code",
  description: "Congratulations! You've won 4,000 advertising credits ($20 value). Use promo code 4K4ME and set up your first ads on My Click Central, the hottest credit-based ad site loaded with buyers.",
  keywords: "promo code, 4K4ME, advertising credits, My Click Central, free ad credits, $20 value, claim credits, credit-based ad site",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  author: "My Click Central",
  canonical: "https://techhubtalks.pro/claim-promo",
}

const LandingPage = () => {
  const router = useRouter();

  const handleClaim = () => {
    // Handle the claim action (e.g., redirect to promo page or trigger an API call)
    router.push('https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5'); // Redirect to the actual claim page or link
  };

  return (
    <div className="z-50 absolute top-0 left-0 max-w-screen w-full h-screen flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 to-orange-500 p-8">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-green-600">
          🎉 Congratulations!
        </h1>
        <p className="text-2xl font-semibold mb-6">
          YOU'VE JUST WON A <span className="text-blue-600">PROMO CODE</span> for
          <span className="text-green-500"> 4,000 Advertising Credits!</span>
        </p>
        <p className="text-xl mb-8 text-gray-700">
          <span className="font-bold">$20 Value</span>
        </p>

        <div className="mb-6">
          <p className="text-2xl font-bold mb-4">Promo Code:</p>
          <div className="bg-gray-200 text-3xl p-4 rounded-lg font-mono tracking-wider">
            4K4ME
          </div>
        </div>

        <button
          onClick={handleClaim}
          className="bg-green-600 text-white text-2xl py-3 px-8 rounded-md hover:bg-green-700 transition-all font-semibold mt-6"
        >
          CLICK HERE TO CLAIM NOW! 🚀
        </button>

        <p className="text-gray-700 text-lg mt-8">
          My Click Central is the hottest credit-based ad site that's loaded with
          <span className="font-bold text-red-600"> BUYERS!</span>
        </p>
        <p className="text-lg text-gray-600 mt-4">
          You've been invited by <span className="font-bold text-blue-600">Bob Z</span>
        </p>

        <p className="text-lg text-gray-700 mt-8">
          Claim this gift & set up your first ads now!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
