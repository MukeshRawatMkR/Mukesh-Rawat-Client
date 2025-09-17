import { useEffect, useState } from 'react';
import { BookOpen, Clock, ArrowLeft, Mail, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogComingSoon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-primary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Back to Portfolio Link */}
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          </div>

          {/* Main Icon */}
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                <BookOpen size={64} className="text-primary animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Clock size={16} className="text-yellow-900" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Blog Coming Soon
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Something Amazing is in the Works
          </h2>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm currently crafting a beautiful blog experience where I'll share insights about 
              web development, tech trends, and my journey as a developer.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="portfolio-card text-center p-6">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Tech Articles</h3>
                <p className="text-sm text-muted-foreground">Articles & References</p>
              </div>
              <div className="portfolio-card text-center p-6">
                <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Project Updates</h3>
                <p className="text-sm text-muted-foreground">Behind-the-scenes of my projects</p>
              </div>
              <div className="portfolio-card text-center p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Industry Tips</h3>
                <p className="text-sm text-muted-foreground">Best practices and new learnings</p>
              </div>
            </div>

            <p className="text-muted-foreground">
              Stay tuned! The blog will be launching soon with exciting content for developers 
              and tech enthusiasts.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/#contact"
              className="btn-hero flex items-center gap-2"
            >
              <Mail size={18} />
              Get Notified When Live
            </Link>
            <Link 
              to="/#projects"
              className="btn-outline-hero flex items-center gap-2"
            >
              <BookOpen size={18} />
              Check My Projects
            </Link>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '75%' }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Content creation and design in progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComingSoon;