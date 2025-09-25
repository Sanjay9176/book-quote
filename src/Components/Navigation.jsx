export default function Navigation({ handlePrev, handleNext, autoPlay, handleTogglePlay }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6 justify-center">
      <button
        onClick={handlePrev}
        className="px-4 py-2 text-sm sm:text-base rounded-lg bg-[#89e74e] text-black hover:opacity-90 transition-smooth"
      >
        ◀ Prev
      </button>
      <button
        onClick={handleTogglePlay}
        className="px-4 py-2 text-sm sm:text-base rounded-lg bg-[#89e74e] text-black hover:opacity-90 transition-smooth"
      >
        {autoPlay ? "⏸ Pause" : "▶ Play"}
      </button>
      <button
        onClick={handleNext}
        className="px-4 py-2 text-sm sm:text-base rounded-lg bg-[#89e74e] text-black hover:opacity-90 transition-smooth"
      >
        Next ▶
      </button>
    </div>
  );
}
