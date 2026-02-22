import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-10 mb-10 text-[#5E6282] mt-20">
      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {/* Brand */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-4xl font-bold font-display text-[#181E4B]">
            Jadoo.
          </h2>
          <p className="text-sm leading-loose max-w-xs font-medium">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:col-span-2">
          <div className="space-y-6">
            <h4 className="font-bold text-[#080809] text-xl">Company</h4>
            <ul className="space-y-3 font-medium">
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  Mobile
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-[#080809] text-xl">Contact</h4>
            <ul className="space-y-3 font-medium">
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-[#080809] text-xl">More</h4>
            <ul className="space-y-3 font-medium">
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  Airlinefees
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  Airline
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DF6951] transition">
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social + App */}
        <div className="space-y-8">
          <div className="flex space-x-6">
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#DF6951] transition-all group">
              <Facebook
                size={20}
                className="group-hover:text-white text-black transition-colors"
              />
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#DF6951] transition-all group">
              <Instagram
                size={20}
                className="group-hover:text-white text-black transition-colors"
              />
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#DF6951] transition-all group">
              <Twitter
                size={20}
                className="group-hover:text-white text-black transition-colors"
              />
            </button>
          </div>
          <h4 className="text-xl text-[#5E6282] font-medium">
            Discover our app
          </h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#333] transition w-fit">
              <div className="text-white text-xl font-bold">��</div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold">
                  Get it on
                </div>
                <div className="font-bold text-xs">Google Play</div>
              </div>
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#333] transition w-fit">
              <div className="text-white text-xl font-bold"></div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold">
                  Available on the
                </div>
                <div className="font-bold text-xs">Apple Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 mt-8">
        <p className="font-medium text-sm text-[#5E6282]">
          All rights reserved@jadoo.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
