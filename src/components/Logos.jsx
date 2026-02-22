import React from "react";

const Logos = () => {
  const logos = [
    {
      name: "Axon",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Axon_logo.svg/1024px-Axon_logo.svg.png",
    }, // Approximate
    {
      name: "Jetstar",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Jetstar_Airways_Logo.svg/1200px-Jetstar_Airways_Logo.svg.png",
    },
    {
      name: "Expedia",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png",
    },
    {
      name: "Qantas",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Qantas_Airways_logo_2016.svg/2560px-Qantas_Airways_logo_2016.svg.png",
    },
    {
      name: "Alitalia",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Alitalia_Logo_2017.svg/1200px-Alitalia_Logo_2017.svg.png",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-10 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-32 h-16 flex items-center justify-center filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer text-center bg-white p-2 rounded-lg"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerText = logo.name;
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
