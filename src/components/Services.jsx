import React from "react";
import { Antenna, Plane, Mic2, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      active: true,
    },
    {
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-10 mb-20" id="services">
      <div className="text-center mb-16">
        <h3 className="text-[#5E6282] font-semibold text-lg uppercase">
          Category
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-[#181E4B] mt-2">
          We Offer Best Services
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative px-10">
        {/* Plus pattern decor */}
        <div className="absolute top-0 right-0 opacity-20 hidden lg:block">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="text-[#DF6951] font-bold">
                +
              </div>
            ))}
          </div>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 rounded-[36px] text-center hover:shadow-xl hover:bg-white transition-all duration-300 relative bg-white md:bg-transparent"
          >
            <div className="mb-6 relative inline-block h-20 w-20 flex items-center justify-center mx-auto">
              {/* Icon Background */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#FFF1DA] rounded-tr-[18px] rounded-bl-[18px] -z-10 group-hover:bg-[#DF6951] group-hover:bg-opacity-10 transition-colors"></div>

              {index === 0 && (
                <Antenna
                  size={48}
                  className="text-[#181E4B] group-hover:text-[#DF6951] transition-colors"
                />
              )}
              {index === 1 && (
                <Plane
                  size={48}
                  className="text-[#181E4B] group-hover:text-[#DF6951] transition-colors"
                />
              )}
              {index === 2 && (
                <Mic2
                  size={48}
                  className="text-[#181E4B] group-hover:text-[#DF6951] transition-colors"
                />
              )}
              {index === 3 && (
                <Settings
                  size={48}
                  className="text-[#181E4B] group-hover:text-[#DF6951] transition-colors"
                />
              )}
            </div>

            <h3 className="text-[#1E1D4C] font-open-sans font-semibold text-xl mb-4">
              {service.title}
            </h3>
            <p className="text-[#5E6282] leading-relaxed text-sm w-3/4 mx-auto">
              {service.description}
            </p>

            {/* Red shape for the active/second card as seen in design */}
            {index === 1 && (
              <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 bg-[#DF6951] rounded-tl-[30px] rounded-br-[10px] hidden group-hover:block transition-all"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
