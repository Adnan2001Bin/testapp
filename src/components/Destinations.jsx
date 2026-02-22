import React from "react";
import { Navigation } from "lucide-react";

const Destinations = () => {

  return (
    <section
      className="container mx-auto px-6 py-10 mb-20 relative"
      id="destinations"
    >
      <div className="text-center mb-16">
        <h3 className="text-[#5E6282] font-semibold text-lg uppercase">
          Top Selling
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-[#181E4B] mt-2">
          Top Destinations
        </h2>
      </div>
    </section>
  );
};

export default Destinations;
