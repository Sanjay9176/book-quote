import { useState, useEffect, useRef } from "react";
import quotesData from "../data/quotes.json";
import QuoteCard from "../Components/QuoteCard";
import Navigation from "../Components/Navigation";
import ProgressBar from "../Components/ProgressBar";
import BookGallery from "../Components/BookGallery";
import { RiScrollToBottomFill } from "react-icons/ri";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [likedQuotes, setLikedQuotes] = useState({});
  const intervalRef = useRef(null);

  const toggleLike = (quoteIndex) => {
    setLikedQuotes((prev) => ({
      ...prev,
      [quoteIndex]: !prev[quoteIndex],
    }));
  };

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % quotesData.length);
      }, 3750); 
    }

    return () => clearInterval(intervalRef.current); 
  }, [autoPlay]);

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setAutoPlay(false); 

    setIndex((prev) => (prev - 1 + quotesData.length) % quotesData.length);
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setAutoPlay(false);

    setIndex((prev) => (prev + 1) % quotesData.length);
  };

  const handleTogglePlay = () => {
    clearInterval(intervalRef.current); 
    setAutoPlay(!autoPlay); 
  };

  return (
    <div className="min-h-screen bg-[#1e211d] flex flex-col items-center justify-center p-4"> 
      
      <ProgressBar current={index} total={quotesData.length} autoPlay={autoPlay} />
      
      <QuoteCard
        quote={quotesData[index]}
        liked={likedQuotes[index] || false}
        toggleLike={() => toggleLike(index)}
      />
      
      <Navigation
        index={index}
        setIndex={setIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
        autoPlay={autoPlay}
        handleTogglePlay={handleTogglePlay}
      />
      
      <p className="mt-[10px] text-white font-bold text-[12px] lg:text-sm flex items-center ">
        SCROLL DOWN
        <span className="text-[#89e74e] hover:text-black transition-colors duration-300 ml-1">
          <RiScrollToBottomFill size={16} />
        </span>
      </p>
      
      <BookGallery />
    </div>
  );
}