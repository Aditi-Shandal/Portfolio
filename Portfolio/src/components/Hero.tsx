
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-[#0f1218] text-white px-4 relative">
      <p className="text-lg text-gray-400 mb-2">Hello, I'm</p>
      <h1 className="text-7xl md:text-8xl font-bold mb-4 text-center">Aditi</h1>
      <p className="text-2xl md:text-3xl text-gray-300 mb-10 text-center">
        Computer Science Student & Developer
      </p>
      
      <p className="text-gray-400 mb-12 text-center max-w-3xl">
        I am a driven and high-performing computer science student, familiar with different
        programming languages and eager to build a career in IT and software development.
        I am excited to learn new technologies, while using my analytical and technical skills
        to contribute to achieving organizational goals.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={scrollToProjects}
          className="bg-gray-600 hover:bg-gray-700 px-8 py-6 text-lg"
        >
          View My Work
        </Button>
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-[#0f1218] px-8 py-6 text-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Me
        </Button>
      </div>
      
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
