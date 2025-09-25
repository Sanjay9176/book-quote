import { motion } from "framer-motion";

export default function ProgressBar({ current, total, autoPlay }) {
  const animationKey = current === 0 ? "reset" : "running"; 

  return (
    <div key={animationKey} className="w-full max-w-lg flex gap-1 mb-4 sm:mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-[#89e74e]"
            initial={{ width: "0%" }}
            animate={{
              width:
                i < current
                  ? "100%" 
                  : i === current
                  ? "100%" 
                  : "0%", 
            }}
            transition={{
              duration: autoPlay && i === current ? 3.75 : 0, 
              ease: "linear",
            }}
          />
        </div>
      ))}
    </div>
  );
}