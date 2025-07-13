import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Section from '@/components/ui/section';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '2d87f42e-836f-4347-a579-e1b76f4d0344'); // Replace with your actual access key
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vikasbastewad24@gmail.com',
      href: 'mailto:vikasbastewad24@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8830475325',
      href: 'tel:+918830475325',
      color: 'secondary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: '#',
      color: 'accent'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vikas-bastewad-a93498216',
      href: 'https://linkedin.com/in/vikas-bastewad-a93498216',
      color: 'primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/VikasBastewad',
      href: 'https://github.com/VikasBastewad',
      color: 'secondary'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Get In <span className="text-glow">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can work together to 
            create something amazing. I'm always excited to take on new challenges.
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Send Me a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/20 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/20 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-muted/20 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-muted/20 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="btn-gradient w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I'm always 
                happy to discuss new opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="glass-card p-4 flex items-center gap-4 hover:scale-105 transition-all duration-300 group"
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className={`w-12 h-12 bg-gradient-${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.label}</h3>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-bold">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Available for new projects and job opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Open to both short-term and long-term projects</span>
                </div>
              </div>
            </div>

            {/* Quick Stats
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-bold">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-glow">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      {/* <Section className="bg-gradient-card">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about working together and my services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 space-y-3">
              <h3 className="text-lg font-bold">What's your typical project timeline?</h3>
              <p className="text-muted-foreground text-sm">
                Project timelines vary based on complexity. Simple websites take 1-2 weeks, 
                while full-stack applications can take 4-8 weeks. I provide detailed estimates 
                after understanding your requirements.
              </p>
            </div>

            <div className="glass-card p-6 space-y-3">
              <h3 className="text-lg font-bold">Do you provide ongoing support?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! I offer maintenance and support packages for all projects. This includes 
                bug fixes, updates, and feature enhancements as needed.
              </p>
            </div>

            <div className="glass-card p-6 space-y-3">
              <h3 className="text-lg font-bold">What technologies do you specialize in?</h3>
              <p className="text-muted-foreground text-sm">
                I specialize in React, Flask, Python, C/C++, and Linux development. 
                I'm also experienced with databases, cloud deployment, and modern web technologies.
              </p>
            </div>

            <div className="glass-card p-6 space-y-3">
              <h3 className="text-lg font-bold">How do you handle project communication?</h3>
              <p className="text-muted-foreground text-sm">
                I believe in transparent communication with regular updates, progress reports, 
                and milestone reviews. We'll establish a communication schedule that works for you.
              </p>
            </div>
          </div>
        </div>
      </Section> */}
    </div>
  );
};

export default Contact;