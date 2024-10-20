"use client"
import Image from "next/image";
import React, { useState } from 'react';
import bg from '../app/picture/ai-generated-8678649_1920.png';
import Hero from "./components/Hero";






export default function Home() {
  const [message, setMessage] = useState("Hello Fellows");

  const changeMessage = () => {
    setMessage("WELCOME TO MY WEBSITE!");
  };

  return (
    
    <div className="relative min-h-screen text-2xl p-4">
      <Hero />
      <div className="absolute inset-0" >
      <Image className="w-full h-full object-cover" src={bg} alt="img1" layout="fill"/>
    </div >
    <div className="relative z-10 p-4">
      <h1 className="text-white font-bold">{message}</h1>
      <button
        onClick={changeMessage}
        aria-label="Change message"
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Change Message
      </button>

      <section className="mt-8">
        <h2 className="text-xl text-white font-bold">Tips for College Studies</h2>
        <p className="text-xl text-white font-bold">
          Succeeding in college requires effective study habits, time management, and a balanced approach to academic and personal life.
        </p>
        
        <h3 className="mt-4  text-white font-bold">Effective Study Techniques:</h3>
        <ul className="list-disc list-inside  text-white font-bold">
          <li>Active Learning: Engage with the material through discussions and practice.</li>
          <li>Study Groups: Collaborate with peers to enhance understanding.</li>
          <li>Time Management: Use planners to organize tasks and deadlines.</li>
        </ul>
        
        <h3 className="mt-4  text-white font-bold">Balancing Academics and Personal Life:</h3>
        <ul className="list-disc list-inside  text-white font-bold">
          <li>Prioritize self-care: Ensure you get enough sleep, exercise, and relaxation.</li>
          <li>Set boundaries: Designate specific times for studying and leisure activities.</li>
          <li>Seek support: Don’t hesitate to reach out to academic advisors or counselors.</li>
        </ul>
        
        <h3 className="mt-4  text-white">Resources for College Success:</h3>
        <ul className="list-disc list-inside text-white ">
          <li><a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer" className="text-blue-800 font-bold underline-offset-1">Khan Academy: Academic Support</a></li>
          <li><a href="https://www.studocu.com/en/" target="_blank" rel="noopener noreferrer" className="text-blue-800 font-bold">Studocu: Study Resources</a></li>
          <li><a href="https://www.my.study.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 font-bold">Study.com: Online Courses</a></li>
        </ul>
      </section>
    </div>
     
    </div>
    
  );
}