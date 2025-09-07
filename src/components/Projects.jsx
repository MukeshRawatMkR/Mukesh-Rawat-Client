import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sample projects data (in real app, this would come from your backend/Supabase)
  const projects = [
    {
      id: 1,
      title: 'HangMan Game',
      description: 'A fun and interactive HangMan game built with React. Players can guess letters to reveal a hidden word within a limited number of attempts.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBubNmLgOI9YSHanRbCWozPtkjjmJfsXktSf9lrKIxZtQ27toJUjQnav3Twon-usscyQ&usqp=CAU',
      techStack: ['React','Tailwind CSS', "State Management", "Conditional Rendering", "Event handling"],
      githubUrl: 'https://github.com/MukeshRawatMkR/Front-End-Using-React/tree/main/Project-Hangman',
      // liveDemoUrl: 'https://ecommerce-demo.vercel.app',
      date: '2025-08-25'
    },
    
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/MukeshRawatMkR/Mukesh-Rawat-Client',
      liveDemoUrl: 'https://mukeshrawat.vercel.app',
      date: '2025-08-29'
    },

    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      techStack: ['React', 'TypeScript', 'Supabase', 'Framer Motion'],
      githubUrl: 'https://github.com/alexjohnson/task-manager',
      liveDemoUrl: 'https://taskmanager-demo.vercel.app',
      date: '2023-11-20'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      techStack: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
      githubUrl: 'https://github.com/alexjohnson/weather-dashboard',
      liveDemoUrl: 'https://weather-dashboard-demo.vercel.app',
      date: '2023-09-10'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with data visualization and performance tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      techStack: ['Vue.js', 'Express.js', 'PostgreSQL', 'D3.js'],
      githubUrl: 'https://github.com/alexjohnson/social-analytics',
      liveDemoUrl: 'https://social-analytics-demo.vercel.app',
      date: '2023-07-05'
    },    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'A recipe discovery application with ingredient-based search, nutritional information, and meal planning features.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      techStack: ['React Native', 'Firebase', 'Spoonacular API', 'Expo'],
      githubUrl: 'https://github.com/alexjohnson/recipe-finder',
      liveDemoUrl: 'https://recipe-finder-demo.vercel.app',
      date: '2023-03-20'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="section-container">
      <div className="max-w-7xl mx-auto">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills in web development, 
            from frontend interfaces to full-stack applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`portfolio-card fade-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
                      title="View Code"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-primary">{project.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(project.date)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;