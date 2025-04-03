
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectsData = [
  {
    title: "Audio-to-Converter",
    description: "Developed a real-time speech-to-text web app using JavaScript, HTML, and CSS with a responsive and user-friendly UI for seamless interaction. Implemented speech recognition with the Web Speech API for accurate transcription.",
    technologies: ["JavaScript", "HTML", "CSS", "Web Speech API"],
    image: "sleek-grey-resume-site-main\src\images\Screenshot 2025-04-03 220337.png"
  },
  {
    title: "Attendance Manager",
    description: "Built a web-based attendance tracking system for managing subject-wise attendance. Developed a backend with Node.js to handle attendance data storage and retrieval. Implemented a calendar-based interface for users to mark and track attendance.",
    technologies: ["Node.js", "HTML", "CSS", "JavaScript"],
    image: "/images/project-attendance.jpg"
  },
  {
    title: "Marketta",
    description: "Developed a responsive e-commerce app with product browsing and cart features. Designed a smooth UI using HTML, CSS, and JavaScript. Implemented dynamic search for easy product filtering.",
    technologies: ["Node.js", "HTML", "CSS", "JavaScript"],
    image: "/images/project-marketta.jpg"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f1218] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="bg-[#1a1f2a] border-gray-700 text-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {

                  }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-200">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
