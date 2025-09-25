import { motion } from "framer-motion";

export default function LikeParticles() {
  const particles = Array.from({ length: 6 });

  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
            x: Math.cos((i / particles.length) * 2 * Math.PI) * 60,
            y: Math.sin((i / particles.length) * 2 * Math.PI) * 60,
          }}
          transition={{ duration: 1.2 }}
          className="w-3 h-3 bg-pink-500 rounded-full"
        />
      ))}
    </div>
  );
}
