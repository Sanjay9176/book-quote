import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";

export default function BookQuotes() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#1e211d] text-white">
      <nav className="flex justify-center gap-6 p-4 bg-[#1e211d] border-b border-gray-700">
        <Link to="/" className={`hover:underline ${location.pathname === "/" ? "font-bold text-[#89e74e]" : ""}`}>
          Home
        </Link>
        <Link to="/about" className={`hover:underline ${location.pathname === "/about" ? "font-bold text-[#89e74e]" : ""}`}>
          About Us
        </Link>
        <Link to="/contact" className={`hover:underline ${location.pathname === "/contact" ? "font-bold text-[#89e74e]" : ""}`}>
          Contact Us
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
