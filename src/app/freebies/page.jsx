
import Banner_480 from "@/banners/banner_480";
import Banner_720 from "@/banners/banner_720";
import React from "react";

const LandingPage = () => {
  return (
    <div style={{direction: "ltr"}} className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-800 text-white absolute max-w-screen w-full top-0 left-0">
      {/* Header Section */}
      <header className="w-full py-6 px-4 bg-opacity-90 bg-black flex justify-between items-center">
        <h1 className="text-4xl font-bold" >Claim Your $500 Freebies!</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          
          <a href="#signup" className="hover:underline">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <div className="w-full overflow-hidden">
          <Banner_480 />
        </div>
        <h2 className="text-5xl font-extrabold mb-4">Unlock $500 in Exclusive Freebies!</h2>
        <p className="text-xl mb-8">Access premium resources, guides, and tools, valued at $500 — absolutely free for USA residents only!</p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-xl">
            <a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5">
                Claim Your Freebies Now!
            </a>
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 text-indigo-800">What’s Included in Your $500 Freebies</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Exclusive Templates</h4>
              <p className="text-lg">Professional templates for projects, resumes, and more.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Step-by-Step Guides</h4>
              <p className="text-lg">Detailed guides to help you succeed in business and personal projects.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Premium Resources</h4>
              <p className="text-lg">Top-tier resources worth $500, available only for USA residents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-indigo-700">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">What Our Users Are Saying</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6 bg-white text-black rounded-lg shadow-lg">
              <p className="text-lg italic">"The $500 freebies have been incredibly valuable for my business. Thank you!"</p>
              <p className="mt-4 font-bold">- Alex, Business Owner</p>
            </div>
            <div className="p-6 bg-white text-black rounded-lg shadow-lg">
              <p className="text-lg italic">"I couldn't believe this was free! The resources are top-notch!"</p>
              <p className="mt-4 font-bold">- Sarah, Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="signup" className="py-20 text-center bg-yellow-500 text-black">
        <h3 className="text-4xl font-bold mb-6">Claim Your $500 Freebies Now!</h3>
        <p className="text-xl mb-8">Enter your email to get instant access. Offer available only for USA residents!</p>
        <input
          type="email"
          className="py-3 px-6 mb-4 rounded-full focus:outline-none"
          placeholder="Enter your email"
        />
        <br />
        <button className="bg-black text-white font-bold py-4 px-8 rounded-full">
            <a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5">
                Get Access
            </a>
        </button>
      </section>
      <div className="mb-4 flex items-center justify-center">
      <script async="async" data-cfasync="false" src="//affordspoonsgray.com/7d56700dd5a27d1bff2cf4b9a2774565/invoke.js"></script>
      <div id="container-7d56700dd5a27d1bff2cf4b9a2774565"></div>
        </div>
      {/* Footer Section */}
      <footer className="py-8 text-center bg-black text-white">
        <p>© 2024 Freebies. All rights reserved. USA Residents Only.</p>
        <nav className="space-x-6 mt-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#signup" className="hover:underline">Get Started</a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
