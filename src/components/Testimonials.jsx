import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 py-10 mb-20 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <div className="pl-4">
        <h3 className="text-[#5E6282] font-semibold text-lg uppercase mb-4">
          Testimonials
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-[#181E4B] mb-12 capitalize leading-tight">
          What People Say <br /> About Us.
        </h2>
        <div className="flex space-x-6 mt-12 mb-8 lg:mb-0">
          <div className="w-3 h-3 rounded-full bg-[#181E4B] cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-[#E5E5E5] cursor-pointer hover:bg-[#181E4B] transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#E5E5E5] cursor-pointer hover:bg-[#181E4B] transition-colors"></div>
        </div>
      </div>

      {/* Right - Cards */}
      <div className="relative w-full flex justify-center lg:justify-start lg:pl-20 items-center">
        {/* Card 1 (Front) */}
        <div className="bg-white rounded-[20px] p-8 shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)] relative z-20 max-w-lg w-full mr-8">
          <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg z-30">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#5E6282] text-base leading-loose mb-8 mt-4 font-medium">
            "On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no."
          </p>
          <div>
            <h4 className="text-[#181E4B] font-bold text-lg">Mike taylor</h4>
            <p className="text-[#5E6282] text-sm font-medium">
              Lahore, Pakistan
            </p>
          </div>
        </div>

        {/* Card 2 (Back) - Offset */}
        <div className="absolute top-20 left-10 lg:left-32 bg-white rounded-[20px] p-8 shadow z-10 max-w-lg w-full opacity-50 border border-gray-100 hidden md:block">
          <div className="h-24"></div>
          {/* Just a dummy back card to show stack effect */}
          <div>
            <h4 className="text-[#181E4B] font-bold text-lg">Chris Thomas</h4>
            <p className="text-[#5E6282] text-sm font-medium">
              CEO of Red Button
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 hidden md:flex">
          <ChevronUp className="text-[#BCB7C2] hover:text-[#181E4B] cursor-pointer" />
          <ChevronDown className="text-[#181E4B] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
