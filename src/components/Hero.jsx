import { Download, FolderOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = [
    'Full-Stack Developer',
    'MERN Stack Developer', 
    'React Developer',
    'Node.js Developer',
    'Tech Enthusiast',
    'Lifelong Learner'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(titleInterval);
  }, [titles.length]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen hero-section relative overflow-hidden flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Mukesh Rawat - Profile Photo" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-foreground/20 shadow-xl hover:border-primary-foreground/40 transition-all duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-primary-foreground/10"></div>
            </div>
          </div>
          
          <h1 className="text-primary-foreground mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent dark:from-blue-500 dark:to-black">Mukesh Rawat</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-primary-foreground/80 mb-8 font-light min-h-[3rem] flex items-center justify-center">
            <span key={currentTitleIndex} className="animate-fade-in-up">
              {titles[currentTitleIndex]}
            </span>
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, responsive web applications with modern technologies. 
            Passionate about clean code, user experience (UX), and bringing ideas to life.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="btn-hero btn-outline-hero flex items-center gap-2"
            >
               <FolderOpen size={18} />
              View My Projects
            </button>
            <button 
              onClick={scrollToContact}
              className="btn-outline-hero flex items-center gap-2">
        <Mail size={18} />
              Contact Me
            </button>
         <button className="btn-outline-hero flex items-center gap-2">
      <Download size={18} />
      Download Resume
    </button>
 
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/MukeshRawatMkR?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:swissmukeshrawat@gmail.com"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/1.1 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary-foreground/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;