import React from "react";
import {
  Map,
  Leaf,
  Send,
  Building2,
  Heart,
  FolderCheck,
  CreditCard,
  Plane,
} from "lucide-react";

const BookTrip = () => {
  const steps = [
    {
      icon: (
        <div className="w-12 h-12 bg-[#F0BB1F] rounded-[13px] flex items-center justify-center text-white">
          <FolderCheck size={20} />
        </div>
      ),
      title: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: (
        <div className="w-12 h-12 bg-[#F15A2B] rounded-[13px] flex items-center justify-center text-white">
          <CreditCard size={20} />
        </div>
      ),
      title: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: (
        <div className="w-12 h-12 bg-[#006380] rounded-[13px] flex items-center justify-center text-white">
          <Plane size={20} />
        </div>
      ),
      title: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <section
      className="container mx-auto px-6 py-10 mb-20 grid lg:grid-cols-2 gap-12 items-center"
      id="bookings"
    >
      {/* Left Side */}
      <div className="pl-4">
        <h3 className="text-[#5E6282] font-semibold text-lg uppercase mb-4">
          Easy and Fast
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-[#181E4B] mb-12 capitalize leading-tight">
          Book your next trip <br /> in 3 easy steps
        </h2>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-center">
              {step.icon}
              <div>
                <h4 className="text-[#5E6282] font-bold text-lg mb-1">
                  {step.title}
                </h4>
                <p className="text-[#5E6282] leading-relaxed max-w-xs text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Card Mockup */}
      <div className="relative flex justify-center items-center mt-12 lg:mt-0">
        {/* Blue Blur Background */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-[#59B1E6] rounded-full blur-[80px] opacity-40 -z-10"></div>

        <div className="bg-white rounded-[26px] p-6 shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)] max-w-[370px] w-full relative z-10 hover:scale-105 transition-transform duration-500">
          <div className="h-40 rounded-[24px] overflow-hidden mb-6 relative">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Greece"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-[#181E4B] font-bold text-xl mb-3 tracking-wide">
            Trip To Greece
          </h3>
          <div className="flex items-center space-x-4 text-[#84829A] mb-6 font-medium text-sm">
            <span>14-29 June</span>
            <span>|</span>
            <span>by Robbin joseph</span>
          </div>
          <div className="flex space-x-4 mb-8">
            <div className="w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#84829A]">
              <Leaf size={16} />
            </div>
            <div className="w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#84829A]">
              <Map size={16} />
            </div>
            <div className="w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#84829A]">
              <Send size={16} />
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center space-x-3 text-[#84829A] text-sm font-medium">
              <Building2 size={18} />
              <span>24 people going</span>
            </div>
            <Heart size={20} className="text-[#4152CA]" />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-16 -right-24 bg-white p-4 rounded-[18px] shadow-2xl flex gap-4 w-64 hidden xl:flex">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Rome"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[#84829A] text-sm font-medium">
                Ongoing
              </span>
              <h4 className="text-[#181E4B] font-bold text-lg mb-2">
                Trip to rome
              </h4>
              <div className="text-[#181E4B] font-bold text-sm space-y-2">
                <div>
                  <span className="text-[#8A79DF]">40%</span> completed
                </div>
                <div className="w-32 h-1.5 bg-[#F5F5F5] rounded-full overflow-hidden">
                  <div className="w-[40%] h-full bg-[#8A79DF] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
