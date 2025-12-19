import React from "react";
import Navbar from "../../components/students/Navbar";
import Hero from "../../components/students/Hero";
import Compaines from "../../components/students/Compaines";
import CoursesSection from "../../components/students/CoursesSection";
import TestimonialsSection from "../../components/students/TestimonialsSection";
import CallToAction from "../../components/students/CallToAction";
import Footer from "../../components/students/Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0B0F1A] via-[#0F172A] to-[#020617] text-white">
      
      

      {/* Page Content */}
      <div className="flex flex-col items-center text-center space-y-20 px-4 md:px-10">
        
        {/* Hero Section */}
        <section className="w-full max-w-7xl pt-24">
          <Hero />
        </section>

        {/* Companies */}
        <section className="w-full max-w-6xl">
          <Compaines />
        </section>

        {/* Courses */}
        <section className="w-full max-w-9xl">
          <CoursesSection />
        </section>

        {/* Testimonials */}
        <section className="w-full max-w-6xl">
          <TestimonialsSection />
        </section>

        {/* CTA */}
        <section className="w-full max-w-6xl">
          <CallToAction />
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
