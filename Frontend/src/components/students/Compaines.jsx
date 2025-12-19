import React from "react";

const Compaines = () => {
  return (
    <div className=" pt-16">
      <p className=" text-gray-500 text-2xl">Truested by learners from</p>
      <div className=" flex gap-5 flex-wrap items-center justify-center md:gap-16 md:mt-10 mt-5">
        <img src="/src/assets/microsoft logo.png" alt="microsoft logo" className="md:w-28 w-30 h-10" />
        <img src="/src/assets/tcs logo.png" alt="" className="md:w-28 w-30 h-10" />
        <img src="/src/assets/accenture logo.png" alt="" className="md:w-28 w-30 h-10" />
        <img src="/src/assets/samsung logo.png" alt="" className="md:w-28 w-30 h-10" />
        <img src="/src/assets/google logo.png" alt="" className="md:w-28 w-30 h-10" />
      </div>
    </div>
  );
};

export default Compaines;
