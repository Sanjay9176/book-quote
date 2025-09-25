import { motion } from "framer-motion";
import LikeParticles from "./LikeParticles";

export default function QuoteCard({ quote, liked, toggleLike }) {
  return (
    <motion.div
      key={quote.text}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="relative bg-[#2a2d27] text-white rounded-2xl shadow-lg max-w-lg w-full p-4 sm:p-6"
    >
      <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
        <motion.img
          src={quote.image}
          alt={quote.book}
          className="w-full h-full object-cover"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <p className="text-lg sm:text-xl italic mb-4">"{quote.text}"</p>

      <h3 className="font-semibold text-sm sm:text-base">{quote.author}</h3>
      <h4 className="text-xs sm:text-sm text-gray-400">{quote.book}</h4>

      <button
        onClick={toggleLike}
        className="mt-6 px-4 py-2 text-sm sm:text-base font-medium rounded-lg bg-[#89e74e] text-black hover:scale-105 transition-transform"
      >
        ❤️ {liked ? "Liked" : "Like"}
      </button>

      {liked && <LikeParticles />}
    </motion.div>
  );
}
