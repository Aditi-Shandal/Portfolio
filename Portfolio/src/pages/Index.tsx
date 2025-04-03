
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, FileText, Award, Book, Code } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-[#0f1218] text-white min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-[#141923] px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-4">OBJECTIVE</h3>
                <p className="text-gray-300">
                  I am a driven and high-performing computer science student, familiar with different programming languages
                  and eager to build a career in IT and software development. I am excited to learn new technologies, while using
                  my analytical and technical skills to contribute to achieving organizational goals.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">EDUCATION</h3>
                <div className="space-y-4">
                  <div className="bg-[#1a1f2a] p-4 rounded-lg">
                    <h4 className="font-medium">Bachelor of Engineering in Computer Science</h4>
                    <p className="text-gray-400">Chitkara University, Baddi | CGPA: 8.47</p>
                    <p className="text-gray-400">2022-2026</p>
                  </div>
                  <div className="bg-[#1a1f2a] p-4 rounded-lg">
                    <h4 className="font-medium">12th Standard CBSE</h4>
                    <p className="text-gray-400">GMSSS-27, Chandigarh | 77.8%</p>
                    <p className="text-gray-400">2022</p>
                  </div>
                  <div className="bg-[#1a1f2a] p-4 rounded-lg">
                    <h4 className="font-medium">10th Standard CBSE</h4>
                    <p className="text-gray-400">St Vivekanand Millennium School, Panchkula | 83%</p>
                    <p className="text-gray-400">2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#141923] px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-[#1a1f2a] p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-xl">
                  <Code className="h-5 w-5" />
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["C", "C++", "Java", "JavaScript", "HTML", "CSS"].map((skill) => (
                    <Badge key={skill} className="bg-gray-700 text-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#1a1f2a] p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4 text-xl">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MongoDB"].map((skill) => (
                    <Badge key={skill} className="bg-gray-700 text-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#1a1f2a] p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4 text-xl">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Visual Studio Code", "GitHub"].map((skill) => (
                    <Badge key={skill} className="bg-gray-700 text-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#1a1f2a] p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4 text-xl">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Communication", "Team Work", "Time Management", "Adaptability", "Emotional Intelligence"].map((skill) => (
                    <Badge key={skill} className="bg-gray-700 text-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certificates Section */}
        <section id="certificates" className="py-20 bg-[#0f1218] px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Certificates</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-[#1a1f2a] border-gray-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-gray-400" />
                    <div>
                      <h3 className="font-semibold mb-2">Coursera Computer Network Certificate</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1f2a] border-gray-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-gray-400" />
                    <div>
                      <h3 className="font-semibold mb-2">Infosys Springboard Programming in C++ Basic to Advance</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1f2a] border-gray-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-gray-400" />
                    <div>
                      <h3 className="font-semibold mb-2">Infosys Springboard Database Management System</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1f2a] border-gray-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-gray-400" />
                    <div>
                      <h3 className="font-semibold mb-2">Cisco Networking Academy-Javascript Essentials 1</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Participation Section */}
        <section id="participation" className="py-20 bg-[#141923] px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Participation</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-[#1a1f2a] border-gray-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Book className="h-8 w-8 text-gray-400" />
                    <div>
                      <h3 className="font-semibold mb-2">Explore AI 2.0 Hackathon</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1a1f2a] border-gray-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Book className="h-8 w-8 text-gray-400" />
                    <div>
                      <h3 className="font-semibold mb-2">Code-A-Thon 3.0 conducted under ACM Student Chapter</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#0f1218] px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <a href="mailto:aditishandal@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
                <span>aditishandal@gmail.com</span>
              </a>
              <a href="tel:+917015424119" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Phone className="h-5 w-5" />
                <span>+91 7015424119</span>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild className="text-white border-white hover:bg-white hover:text-[#0f1218]">
                <a href="https://github.com/Aditi-Shandal" className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="outline" asChild className="text-white border-white hover:bg-white hover:text-[#0f1218]">
                <a href="https://linkedin.com/in/aditi-shandal" className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button asChild className="bg-gray-600 hover:bg-gray-700">
                <a href="#" className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#0a0d13] py-6 text-center text-gray-400">
        <p>© 2025 Aditi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
