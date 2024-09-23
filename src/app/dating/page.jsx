// pages/index.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center py-10">
      <header className="text-center space-y-5">
        <h1 className="text-5xl font-extrabold text-pink-600">
          Meet Hot Girls Near You
        </h1>
        <p className="text-xl text-gray-600">
          Join the hottest dating site and start chatting today!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Girl 1 */}
        <a href="#" className="group relative">
          <Image
            src="/images/girl1.jpg"
            alt="Girl 1"
            width={400}
            height={500}
            className="rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md group-hover:bg-pink-700 transition duration-300">
            Start Dating
          </button>
        </a>

        {/* Girl 2 */}
        <a href="#" className="group relative">
          <Image
            src="/images/girl2.jpg"
            alt="Girl 2"
            width={400}
            height={500}
            className="rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md group-hover:bg-pink-700 transition duration-300">
            Start Dating
          </button>
        </a>

        {/* Girl 3 */}
        <a href="#" className="group relative">
          <Image
            src="/images/girl3.jpg"
            alt="Girl 3"
            width={400}
            height={500}
            className="rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md group-hover:bg-pink-700 transition duration-300">
            Start Dating
          </button>
        </a>
      </div>
    </div>
  );
}
