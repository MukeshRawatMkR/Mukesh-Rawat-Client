import { useState, useEffect } from "react";
import { Mail, Menu, User, X, FolderKanban, Home, BookOpen } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle.jsx";
import profilePhoto from '@/assets/profile-photo.png';
import BlogComingSoon from "../pages/BlogComingSoon.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  // CMS/Blog link - currently points to coming soon page
  const blogUrl = BlogComingSoon; // Will be updated to actual blog URL when hosted, To-Do

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 text-xl font-bold text-primary hover:text-primary-light transition-colors"
            >
              <img 
                src={profilePhoto} 
                alt="Mukesh Rawat" 
                className="w-8 h-8 rounded-full object-cover border border-primary/20" 
              />
              MUKESH RAWAT
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.slice(0, 3).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`navbar-link flex items-center gap-2 ${
                      activeSection === item.id ? "active" : ""
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
              {/* Blog/CMS Link */}
              <a
                href={blogUrl}
                className="navbar-link flex items-center gap-2 hover:text-primary transition-colors relative"
                data-testid="link-blog"
              >
                <BookOpen size={18} />
                Blog
                <span className="text-xs bg-yellow-500 text-yellow-900 px-1.5 py-0.5 rounded-full font-medium">Soon</span>
              </a>
              {navItems.slice(3).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`navbar-link flex items-center gap-2 ${
                      activeSection === item.id ? "active" : ""
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
            {/* Mobile Blog/CMS Link */}
            <a
              href={blogUrl}
              className="flex items-center gap-2 px-3 py-2 text-base font-medium w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="link-blog-mobile"
            >
              <BookOpen size={18} />
              Blog
              <span className="text-xs bg-yellow-500 text-yellow-900 px-1.5 py-0.5 rounded-full font-medium ml-auto">Soon</span>
            </a>
            {navItems.slice(3).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;