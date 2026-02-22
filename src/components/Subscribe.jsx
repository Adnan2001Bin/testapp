import React from "react";
import { Send, Mail } from "lucide-react";

const Subscribe = () => {
  return (
    <section
      className="container mx-auto px-6 py-10 mb-20 relative px-4 md:px-20"
      id="subscribe"
    >
      <div className="bg-[#DFD7F9] bg-opacity-20 rounded-tl-[129px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] relative py-16 px-6 md:px-20 text-center overflow-hidden">
        {/* Background Decor Circles */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="300" height="300" viewBox="0 0 200 200">
            <circle
              cx="150"
              cy="50"
              r="100"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="150"
              cy="50"
              r="80"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="150"
              cy="50"
              r="60"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none transform rotate-180">
          <svg width="300" height="300" viewBox="0 0 200 200">
            <circle
              cx="150"
              cy="50"
              r="100"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="150"
              cy="50"
              r="80"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="150"
              cy="50"
              r="60"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto space-y-12">
          {/* Floating Send Icon */}
          <div className="absolute -top-10 -right-10 bg-gradient-to-r from-[#747DEF] to-[#5E3BE1] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hidden lg:flex transform hover:scale-110 transition cursor-pointer">
            <Send
              className="text-white transform -rotate-45 translate-x-[-2px] translate-y-[2px]"
              fill="white"
              size={28}
            />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-[#5E6282] leading-relaxed px-4">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white rounded-[10px] px-6 py-4 flex items-center w-full sm:w-80 shadow-sm border border-transparent focus-within:border-[#F1A501] transition">
              <Mail className="text-[#39425D] opacity-40 mr-3" size={20} />
              <input
                type="email"
                placeholder="Your email"
                className="w-full text-base text-[#39425D] outline-none placeholder:text-[#39425D] placeholder:opacity-40"
              />
            </div>
            <button className="bg-[#FF7D68] text-white rounded-[10px] px-10 py-4 font-semibold hover:bg-[#ff644c] transition shadow-lg shadow-[#FF7D68]/30 w-full sm:w-auto text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
