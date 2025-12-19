import React from "react";
import microsoft from "../../assets/microsoft logo.png";
import tcs from "../../assets/tcs logo.png";
import accenture from "../../assets/accenture logo.png";
import samsung from "../../assets/samsung logo.png";
import google from "../../assets/google logo.png";

const Compaines = () => {
  const companies = [microsoft, tcs, accenture, samsung, google];

  return (
    <section className="pt-20 pb-10 bg-linear-to-b  ">
      {/* Heading */}
      <p className="text-center text-white text-lg md:text-3xl font-medium">
        Trusted by learners from
      </p>

      {/* Logo Wrapper */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
        {companies.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center
            w-40 h-20
            rounded-2xl
            bg-white/80 backdrop-blur-md
            shadow-md
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={logo}
              alt="company logo"
              className="h-10 object-contain
              grayscale opacity-70
              transition-all duration-300
              hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Compaines;
