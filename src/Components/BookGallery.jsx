import { useState } from "react";
import { motion } from "framer-motion";
import books from "../data/books.json";
export default function BookGallery() {
  const [likedBooks, setLikedBooks] = useState({});
  const toggleLike = (id) => {
    setLikedBooks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <section className="bg-[#1e211d] py-12 px-4 mt-[50px]">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        📚 Book Gallery
      </h2>
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-20 md:grid-cols-3 md:gap-x-8 md:gap-y-25">
        {books.map((book, i) => (
          <motion.div
            key={i}
            className="bg-[#2a2d27] rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4">
                <h3 className="text-lg font-bold text-white">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-300">{book.author}</p>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-sm text-gray-200 italic mb-4">
                "{book.quote}"
              </p>

              <button
                onClick={() => toggleLike(i)}
                className={`mt-auto px-4 py-2 rounded-lg font-medium transition-colors ${
                  likedBooks[i]
                    ? "bg-[#89e74e] text-black"
                    : "bg-gray-600 text-white hover:bg-[#89e74e] hover:text-black"
                }`}
              >
                {likedBooks[i] ? "❤️ Liked" : "🤍 Like"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
