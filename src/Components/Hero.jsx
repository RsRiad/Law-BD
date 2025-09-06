import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg relative">
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/7Jc1B3v5/image.png')" }}
        >
          <div className="absolute inset-0 bg-opacity-60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              It avoids subjective claims or
              <br className="hidden md:block" />
              exaggeration that might raise red <br className="hidden md:block" />
              flags legally
            </h1>
            <p className="mt-4 max-w-4xl text-sm md:text-base">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
