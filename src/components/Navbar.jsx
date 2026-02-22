import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-50">
      <Link to="/" className="text-3xl font-bold font-display text-[#181E4B]">
        Jadoo
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 items-center font-medium text-[#212832]">
        <Link
          to="/"
          className="hover:text-[#DF6951] transition-colors"
        >
          Destinations
        </Link>
        <Link to="/hotels" className="hover:text-[#DF6951] transition-colors">
          Hotels
        </Link>
        <Link to="/flights" className="hover:text-[#DF6951] transition-colors">
          Flights
        </Link>
        <Link to="/bookings" className="hover:text-[#DF6951] transition-colors">
          Bookings
        </Link>
        <a href="#login" className="hover:text-[#DF6951] transition-colors">
          Login
        </a>
        <button className="border border-[#212832] rounded-md px-5 py-2 hover:bg-[#212832] hover:text-white transition-all">
          Sign up
        </button>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-[#DF6951]">
          <span>EN</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#212832]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg md:hidden p-6 flex flex-col space-y-4 rounded-lg z-50">
          <Link
            to="/"
            className="text-[#212832] hover:text-[#DF6951]"
            onClick={() => setIsOpen(false)}
          >
            Destinations
          </Link>
          <Link 
            to="/hotels" 
            className="text-[#212832] hover:text-[#DF6951]"
            onClick={() => setIsOpen(false)}
          >
            Hotels
          </Link>
          <Link 
            to="/flights" 
            className="text-[#212832] hover:text-[#DF6951]"
            onClick={() => setIsOpen(false)}
          >
            Flights
          </Link>
          <Link 
            to="/bookings" 
            className="text-[#212832] hover:text-[#DF6951]"
            onClick={() => setIsOpen(false)}
          >
            Bookings
          </Link>
          <a href="#login" className="text-[#212832] hover:text-[#DF6951]">
            Login
          </a>
          <button className="border border-[#212832] rounded-md px-5 py-2 w-full">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
