import { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kotdwara, Uttarakhand',
      link: ''//todo
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8979693152',
      link: ''
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'swissmukeshrawat@gmail.com',
      link: 'mailto:swissmukeshrawat@gmail.com'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/mukeshrawatmkr',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mukesh-rawat-5375a8227/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com/mukeshrawat',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-container bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className={`slide-in-left ${isVisible ? 'visible' : ''}`}>
              <div className="portfolio-card">
                <h3 className="mb-6 text-primary">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`contact-input ${errors.name ? 'border-destructive' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`contact-input ${errors.email ? 'border-destructive' : ''}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`contact-input resize-none ${errors.message ? 'border-destructive' : ''}`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    ) : (
                      <Send size={20} className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`slide-in-right ${isVisible ? 'visible' : ''}`}>
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="portfolio-card">
                  <h3 className="mb-6 text-primary">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <info.icon className="w-5 h-5 text-primary mr-4 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="portfolio-card">
                  <h3 className="mb-6 text-primary">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                        title={social.label}
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="portfolio-card text-center">
                  <h4 className="mb-3 text-primary">Ready to work together?</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm always open to discussing new opportunities and interesting projects.
                  </p>
                  <a
                    href="mailto:swissmukeshrawat@gmail.com"
                    className="btn-hero inline-flex items-center"
                  >
                    <Mail size={18} className="mr-2" />
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;