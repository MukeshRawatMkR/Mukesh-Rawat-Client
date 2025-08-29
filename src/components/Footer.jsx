import { Github, Linkedin, Mail, Heart, Code2, Blocks, Paintbrush, Palette, Laptop, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/mukeshrawatmkr',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/mukeshrawatmkr',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:swissmukeshrawat@gmail.com',
    },
    {
      icon: Globe,
      label: 'Website',
      url: '#', // Replace with your actual website URL
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-accent transition-colors"
            >
              Mukesh Rawat
            </button>
            <p className="text-primary-foreground/80 mt-2 flex items-center gap-2">
      <Laptop size={16} />
      Full Stack Developer 
      <Palette size={16} />
      UX Designer
    </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                title={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 flex items-center justify-center md:justify-end">
              Made with <Heart size={16} className="mx-1 text-red-500 dark:text-red-400" /> © {currentYear}
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
      <Code2 size={16} />
      Built with React, 
      <Blocks size={16} />
      JavaScript, 
      <Paintbrush size={16} />
      Tailwind CSS
    </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;