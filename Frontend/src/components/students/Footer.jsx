import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 md:px-36 text-left w-full mt-10 ">
      <div
        className=" flex flex-col md:flex-row items-start px-8 md:px-0 
       justify-center gap-10 md:gap-32 py-10 border-b border-white/30"
      >
        <div className=" flex flex-col md:items-start items-center w-full">
          <img src={logo} alt="logo" className="w-20 bg-white rounded-full"/>
          <p className=" mt-6 text-center md:text-left text-sm text-white/80 ">
            SkillOrbit is a modern Learning Management System (LMS) designed to help students, professionals, and lifelong learners build in-demand skills through structured, interactive, and practical courses. Our platform brings together high-quality learning content, expert-led instruction, and a premium user experience to make learning accessible, engaging, and career-focused.
          </p>
        </div>
        <div className=" flex flex-col md:items-start items-center w-full">
          <h2 className=" font-semibold text-white mb-5">Companye</h2>
          <ul className=" flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className=" hidden md:flex flex-col items-start w-full">
          <h2 className="  font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className=" text-sm text-white/80">
            The latest news, articles, and resource, send to your inbox weekly.
          </p>
          <div className=" flex items-center gap-2 pt-4
          ">
            <input type="email" name="" id="" placeholder="Enter your email" className=" border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 rounded px-2 text-sm h-9"/>
            <button className=" bg-blue-600 w-24 h-9 text-white rounded hover:cursor-pointer hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>
      <p className=" py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © SkillOrbit. All Right Reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
