import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Palette, 
  Smartphone, 
  Server,
  GitBranch,
  Zap,
  Users,
  Coffee,
  X,
  Star,
  Shield,
  Layers,
  FileText,
  Box,
  Grid,
  Smartphone as Mobile,
  Monitor,
  Search,
  Gauge,
  Scissors,
  Eye
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiGithub
} from 'react-icons/si';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
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

  const getTechnologyIcon = (techName) => {
    const iconMap = {
      'React': SiReact,
      'JavaScript': SiJavascript,
      'TypeScript': SiTypescript,
      'Tailwind CSS': SiTailwindcss,
      'HTML5': SiHtml5,
      'CSS3': SiCss3,
      'Vite': SiVite,
      'Node.js': SiNodedotjs,
      'Express.js': SiExpress,
      'MySQL': SiMysql,
      'MongoDB': SiMongodb,
      'Supabase': SiSupabase,
      'PostgreSQL': SiPostgresql,
      'Git': SiGit,
      'GitHub': SiGithub,
      'RESTful APIs': Server,
      'Authentication': Shield,
      'Middleware': Layers,
      'JavaScript ES6+': SiJavascript,
      'DOM Manipulation': FileText,
      'Web APIs': Box,
      'Mobile-First Design': Mobile,
      'CSS Grid': Grid,
      'Flexbox': Box,
      'Media Queries': Monitor,
      'Cross-Browser Testing': Eye,
      'Database Design': Database,
      'Branching Strategies': GitBranch,
      'Pull Requests': GitBranch,
      'Code Reviews': Eye,
      'Bundle Optimization': Box,
      'SEO Best Practices': Search,
      'Code Splitting': Scissors,
      'Lazy Loading': Eye,
      'Web Performance': Gauge
    };
    return iconMap[techName] || Code2;
  };

  const skills = [
    { 
      icon: Code2, 
      name: 'Frontend Development', 
      description: 'React, Tailwind CSS, Vite',
      technologies: [
        { name: 'React', rating: 9 },
        { name: 'JavaScript', rating: 9 },
        { name: 'TypeScript', rating: 8 },
        { name: 'Tailwind CSS', rating: 9 },
        { name: 'HTML5', rating: 10 },
        { name: 'CSS3', rating: 9 },
        { name: 'Vite', rating: 8 }
      ]
    },
    { 
      icon: Server, 
      name: 'Backend Development', 
      description: 'Node.js, Express, RESTful APIs',
      technologies: [
        { name: 'Node.js', rating: 8 },
        { name: 'Express.js', rating: 8 },
        { name: 'RESTful APIs', rating: 9 },
        { name: 'Authentication', rating: 7 },
        { name: 'Middleware', rating: 8 }
      ]
    },
    { 
      icon: Database, 
      name: 'Database Management', 
      description: 'MySQL, MongoDB, Supabase',
      technologies: [
        { name: 'MySQL', rating: 8 },
        { name: 'MongoDB', rating: 7 },
        { name: 'Supabase', rating: 8 },
        { name: 'PostgreSQL', rating: 7 },
        { name: 'Database Design', rating: 8 }
      ]
    },
    { 
      icon: Globe, 
      name: 'Web Technologies', 
      description: 'HTML5, CSS3, JavaScript ES6+',
      technologies: [
        { name: 'HTML5', rating: 10 },
        { name: 'CSS3', rating: 9 },
        { name: 'JavaScript ES6+', rating: 9 },
        { name: 'DOM Manipulation', rating: 9 },
        { name: 'Web APIs', rating: 8 }
      ]
    },
    { 
      icon: Smartphone, 
      name: 'Responsive Design', 
      description: 'Mobile-first, Cross-browser compatibility',
      technologies: [
        { name: 'Mobile-First Design', rating: 9 },
        { name: 'CSS Grid', rating: 8 },
        { name: 'Flexbox', rating: 9 },
        { name: 'Media Queries', rating: 9 },
        { name: 'Cross-Browser Testing', rating: 8 }
      ]
    },
    { 
      icon: GitBranch, 
      name: 'Version Control', 
      description: 'Git, GitHub, Collaborative workflows',
      technologies: [
        { name: 'Git', rating: 9 },
        { name: 'GitHub', rating: 9 },
        { name: 'Branching Strategies', rating: 8 },
        { name: 'Pull Requests', rating: 9 },
        { name: 'Code Reviews', rating: 8 }
      ]
    },
    { 
      icon: Zap, 
      name: 'Performance Optimization', 
      description: 'Bundle optimization, SEO best practices',
      technologies: [
        { name: 'Bundle Optimization', rating: 7 },
        { name: 'SEO Best Practices', rating: 8 },
        { name: 'Code Splitting', rating: 7 },
        { name: 'Lazy Loading', rating: 8 },
        { name: 'Web Performance', rating: 8 }
      ]
    },
  ];

  const stats = [
    { icon: Coffee, number: '3 Years', label: 'Bachelor Of Computer Application' },
    { icon: Code2, number: '2 Years', label: 'Master of Computer Application' },
    { icon: Code2, number: '150+', label: 'Leetcode Problems Solved' },
    { icon: Code2, number: '5+', label: 'Projects' },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-container bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Bio Section */}
            <div className={`slide-in-left ${isVisible ? 'visible' : ''}`}>
              <h3 className="mb-6 text-primary">Passionate Developer & Designer</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
         I specialize in creating 
                  modern, responsive applications that deliver exceptional user experiences. 
                  My journey began with a curiosity with flexing my skills in HTML & CSS to my classmates, and it has evolved 
                  into a passion for crafting digital solutions that make a difference.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date with 
                  the latest technologies and best practices. When I'm not coding, you can 
                  find me living in the nature.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving to 
                  deliver solutions that not only function flawlessly but also provide 
                  intuitive and engaging user experiences.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className={`slide-in-right ${isVisible ? 'visible' : ''}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="portfolio-card text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-center mb-12 text-primary">Skills & Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="skill-card group cursor-pointer hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                      data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <skill.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-semibold mb-2 text-sm">{skill.name}</h4>
                      <p className="text-xs opacity-90">{skill.description}</p>
                      <div className="mt-3 text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all">
                        Click to view details →
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <skill.icon className="w-6 h-6 text-primary" />
                        {skill.name}
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground text-sm">
                        {skill.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Technology Ratings</h4>
                        {skill.technologies.map((tech, techIndex) => {
                          const TechIcon = getTechnologyIcon(tech.name);
                          return (
                            <div key={techIndex} className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                              <div className="flex items-center gap-3">
                                <TechIcon className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">{tech.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(10)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      size={14} 
                                      className={`${i < tech.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} transition-colors`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-muted-foreground font-mono min-w-[35px]">{tech.rating}/10</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;