import Banner_720 from '@/banners/banner_720'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <script type='text/javascript' src='//affordspoonsgray.com/27/7c/cc/277cccb139255375f748ddfc6b9d01de.js'></script>
      <script async="async" data-cfasync="false" src="//thubanoa.com/1?z=7961235"></script>
      <script async="async" data-cfasync="false" src="//affordspoonsgray.com/7d56700dd5a27d1bff2cf4b9a2774565/invoke.js"></script>
      <script type='text/javascript' src='//affordspoonsgray.com/2d/b3/dc/2db3dc1290e9032f99ff2952bb01f197.js'></script>

      <div className="min-h-screen bg-dark text-white absolute top-0 left-0 z-50 w-full h-full max-w-screen">
        {/* Header */}
        <header className="bg-black shadow-lg">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">The Movie Vault</h1>
            <nav>
              <ul className="flex space-x-4 sm:space-x-6">
                <li><a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5" className="hover:text-yellow-400">Home</a></li>
                <li><a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5" className="hover:text-yellow-400">About</a></li>
                <li><a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5" className="hover:text-yellow-400">Movies</a></li>
                <li><a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5" className="hover:text-yellow-400">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="relative bg-cover bg-center h-screen bg-black bg-opacity-50"
          style={{ backgroundImage: "url('/movie-bg.jpg')" }}>
          <div className="container mx-auto flex flex-col items-center justify-center h-full text-center space-y-6 px-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400">Welcome to The Movie Vault</h2>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl">
              Explore a world of cinematic treasures, from timeless classics to modern blockbusters. Dive deep into the magic of films.
            </p>
            <a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5" className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-500 transition">
              Explore Movies
            </a>
          </div>
        </section>

        <div className="flex items-center justify-center my-4 sm:my-2 overflow-hidden">
          <Banner_720 />
        </div>

        {/* About Section */}
        <section id="about" className="py-12  bg-black sm:py-16 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-6">About Us</h2>
            <p className="text-lg text-center max-w-3xl text-white mx-auto">
              The Movie Vault is your ultimate destination for film lovers. From deep-dive reviews to behind-the-scenes stories, we celebrate the art of cinema in every form.
            </p>
          </div>
        </section>

        {/* Movies Section */}
        <section id="movies" className="py-12 sm:py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-12">Popular Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Movie Card 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Image src="/movie1.jpg" width={600} height={400} alt="Movie 1" />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Movie Title 1</h3>
                  <p className="text-gray-400 mb-4">Short description of the movie and its highlights.</p>
                  <a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5" className="text-yellow-400 hover:text-yellow-500">Watch Now</a>
                </div>
              </div>

              {/* Movie Card 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Image src="/movie2.jpg" width={600} height={400} alt="Movie 2" />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Movie Title 2</h3>
                  <p className="text-gray-400 mb-4">Short description of the movie and its highlights.</p>
                  <a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5" className="text-yellow-400 hover:text-yellow-500">Watch Now</a>
                </div>
              </div>

              {/* Movie Card 3 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Image src="/movie3.jpg" width={600} height={400} alt="Movie 3" />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Movie Title 3</h3>
                  <p className="text-gray-400 mb-4">Short description of the movie and its highlights.</p>
                  <a href="https://affordspoonsgray.com/fi4jipsn2?key=82850efc8000cbd9c39de31c1afcdba5" className="text-yellow-400 hover:text-yellow-500">Watch Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-6">Get in Touch</h2>
            <p className="text-center text-lg max-w-2xl mx-auto mb-12">
              Have questions or suggestions? Reach out to us and let's talk movies!
            </p>
            <form className="max-w-lg mx-auto">
              <div className="grid grid-cols-1 gap-4">
                <input type="text" placeholder="Your Name" className="p-4 rounded bg-gray-700 text-white border border-gray-600" />
                <input type="email" placeholder="Your Email" className="p-4 rounded bg-gray-700 text-white border border-gray-600" />
                <textarea placeholder="Your Message" rows={4} className="p-4 rounded bg-gray-700 text-white border border-gray-600"></textarea>
                <button type="submit" className="bg-yellow-400 text-black px-6 py-3 rounded shadow-lg hover:bg-yellow-500 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="flex items-center justify-center">
          <div id="container-7d56700dd5a27d1bff2cf4b9a2774565"></div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-6">
          <div className="container mx-auto text-center">
            <p className="text-gray-500">&copy; 2024 The Movie Vault. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
