import { motion } from "framer-motion";

const quotes = [
  "A reader lives a thousand lives before he dies.",
  "Books are a uniquely portable magic.",
  "That’s the thing about books. They let you travel without moving your feet."
];

const imageOverlayQuotes = [
  "Books open worlds beyond imagination.",
  "Every book is a door to a new universe.",
  "Reading is a journey without limits."
];

const bookImages = [
  "https://images.pexels.com/photos/2041535/pexels-photo-2041535.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
  "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
];

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-[#111311] text-gray-100 p-6 md:p-10"> 
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <header className="py-16 md:py-24 mb-12 border-b border-[#2a2d27] text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold mb-4 text-[#89e74e] tracking-tight"
          >
            Curated Wisdom, Digitized Pages
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Book Quote Shorts is your digital library of inspiration, bridging the gap between timeless literature and the speed of the modern web.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 p-4 md:p-0">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="bg-[#2a2d27] p-6 rounded-xl shadow-2xl border border-gray-700"
            >
                <h2 className="text-3xl font-bold mb-4 text-[#89e74e]">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                    Book Quote Shorts is designed to give readers quick, inspiring moments — just like reels for books. 
                    It is a blend of literature, technology, and creativity, making books accessible in a fast-paced digital world.
                    We aim to bring the most powerful lines from books right to your fingertips, encouraging new reading journeys.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="bg-[#2a2d27] p-6 rounded-xl shadow-2xl border border-gray-700"
            >
                <h2 className="text-3xl font-bold mb-4 text-[#89e74e]">Key Features</h2>
                <ul className="list-none text-gray-300 space-y-3">
                    <li className="flex items-start">
                        <span className="text-[#89e74e] text-xl mr-3">📖</span>
                        Short-form quote viewer with intuitive navigation
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#89e74e] text-xl mr-3">💖</span>
                        Interactive like button with particle animation
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#89e74e] text-xl mr-3">📱</span>
                        Fully responsive design for all devices
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#89e74e] text-xl mr-3">🖼️</span>
                        Book gallery showcasing inspiring covers
                    </li>
                </ul>
            </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#89e74e] mb-8 text-center">A Taste of Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, i) => (
              <motion.div
                key={i}
                className="bg-[#2a2d27] rounded-xl p-6 shadow-xl border-t-2 border-[#89e74e] text-center
                           group transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/20 hover:border-r-2" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <p className="italic text-lg text-gray-200">
                    <span className="text-3xl text-[#89e74e] mr-1">"</span>
                    {quote}
                    <span className="text-3xl text-[#89e74e] ml-1">"</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-[#89e74e] mb-8 text-center">The Books That Inspire Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {bookImages.map((img, i) => (
              <motion.div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-2xl group transition-all duration-500 hover:shadow-cyan-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <img src={img} alt={`Book ${i}`} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">

                  <p className="text-white text-xl font-medium text-center border-b border-[#89e74e] pb-1">
                    {imageOverlayQuotes[i % imageOverlayQuotes.length]}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-500 pt-8 pb-10 mt-12 border-t border-gray-700 text-sm">
          Book Quote Shorts — Bringing literature to your fingertips with style and inspiration.
        </p>
      </motion.div>
    </section>
  );
}