import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      
      <div className="relative z-10 text-white p-4">
        <h1 className="text-5xl font-bold">Welcome to ApnaEduHub</h1>
        <p className="mt-4 text-xl">Your journey to knowledge starts here</p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
