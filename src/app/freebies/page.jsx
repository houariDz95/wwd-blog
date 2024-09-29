import Image from 'next/image';

export default function CPALandingPage() {
  return (
    <div style={{direction: "ltr"}} className="bg-gray-100 min-h-screen absolute top-0 left-0 max-w-screen w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center bg-gradient-to-r from-black to-black text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <Image
          src="/images/iphon-16.jpg" // Replace with your actual image path
          alt="iPhone 16 Pro Max"
          width={500}
          height={500}
          className="z-20"
        />
        <h1 className="z-20 text-4xl md:text-6xl font-bold mt-10">
          Win a Free iPhone 16 Pro Max!
        </h1>
        <p className="z-20 text-xl md:text-2xl mt-4">
          Only for residents of Canada, the United Kingdom, and the United States.
        </p>
        <button className="z-20 mt-10 px-8 py-4 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition duration-300">
          <a href="https://www.lnkmeup.com/view.php?id=5538006&pub=3127730">
            Claim Your Free iPhone Now!
          </a>
        </button>
      </section>

      {/* Offer Details Section */}
      <section className="py-12 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          How to Claim Your Free iPhone
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 w-80">
            <h3 className="text-xl font-bold text-gray-700">Step 1</h3>
            <p className="text-gray-600 mt-2">
              Share this offer with your friends and family in Canada, the UK, or the US.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-80">
            <h3 className="text-xl font-bold text-gray-700">Step 2</h3>
            <p className="text-gray-600 mt-2">
              Complete the registration and confirm your email.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-80">
            <h3 className="text-xl font-bold text-gray-700">Step 3</h3>
            <p className="text-gray-600 mt-2">
              Wait for the draw and win your brand-new iPhone!
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-indigo-100 py-12 px-6 md:px-24">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Eligibility Requirements
        </h2>
        <p className="text-center text-gray-700 mt-6">
          This offer is only available to residents of:
        </p>
        <ul className="text-center mt-4 text-gray-700 space-y-2">
          <li>🇨🇦 Canada</li>
          <li>🇬🇧 United Kingdom</li>
          <li>🇺🇸 United States</li>
        </ul>
        <p className="text-center text-gray-700 mt-6">
          Only target these devices: <strong>Any mobile device</strong>.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-gradient-to-r from-black to-black text-white">
        <h2 className="text-4xl font-bold">
          Don’t Miss Out On Your Free iPhone 16 Pro Max!
        </h2>
        <button className="mt-8 px-12 py-4 bg-green-600 text-lg rounded-lg hover:bg-green-700 transition duration-300">
          <a href="https://www.lnkmeup.com/view.php?id=5538006&pub=3127730">
            Get Yours Now!
          </a>
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6 text-gray-400 text-center">
        <p>Terms & Conditions Apply. Offer valid only for eligible residents of Canada, UK, and US.</p>
        <p className="mt-2">© 2024 Free iPhone Campaign. All rights reserved.</p>
      </footer>
    </div>
  );
}

