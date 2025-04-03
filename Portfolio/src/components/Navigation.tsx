
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'projects',
        'skills',
        'certificates',
        'participation',
        'contact'
      ];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'hero';
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0f1218] bg-opacity-95 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Aditi</Link>
        
        <div className="hidden md:block">
          <Tabs value={activeSection} className="w-auto" onValueChange={(value) => scrollToSection(value)}>
            <TabsList className="bg-[#1a1f2a]">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="participation">Participation</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-gray-600 hover:bg-gray-700 text-white">Resume</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1f2a] py-4 px-6 absolute left-0 right-0 top-full">
          <div className="flex flex-col space-y-4">
            <a onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 transition-colors cursor-pointer">About</a>
            <a onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-300 transition-colors cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('skills')} className="text-white hover:text-gray-300 transition-colors cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection('certificates')} className="text-white hover:text-gray-300 transition-colors cursor-pointer">Certificates</a>
            <a onClick={() => scrollToSection('participation')} className="text-white hover:text-gray-300 transition-colors cursor-pointer">Participation</a>
            <a onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 transition-colors cursor-pointer">Contact</a>
            <Button className="bg-gray-600 hover:bg-gray-700 text-white w-full">Resume</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
