import { Code, Palette, Smartphone, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';

const Services = () => {
  const services = [
    {
      title: 'Custom Front-end Interfaces',
      description: 'Modern, responsive interfaces using React, HTML, and CSS with attention to user experience and performance.',
      icon: Code,
      color: 'primary',
      features: [
        'React.js development',
        'Responsive design',
        'Modern CSS techniques',
        'Component-based architecture',
        'Performance optimization'
      ],
      //price: 'Starting from $500'
    },
    {
      title: 'Full-stack Web Development',
      description: 'End-to-end web applications with Flask backends, database integration, and complete deployment solutions.',
      icon: Globe,
      color: 'secondary',
      features: [
        'Flask backend development',
        'Database design & integration',
        'RESTful API development',
        'Authentication systems',
        'Cloud deployment'
      ],
      //price: 'Starting from $1200'
    },
    {
      title: 'UI/UX Design Services',
      description: 'Beautiful, intuitive user interfaces with focus on usability, accessibility, and modern design principles.',
      icon: Palette,
      color: 'accent',
      features: [
        'User interface design',
        'User experience optimization',
        'Design system creation',
        'Prototyping & wireframing',
        'Accessibility compliance'
      ],
      //price: 'Starting from $400'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first, responsive designs that work perfectly across all devices and screen sizes.',
      icon: Smartphone,
      color: 'primary',
      features: [
        'Mobile-first approach',
        'Cross-browser compatibility',
        'Touch-friendly interfaces',
        'Performance optimization',
        'Progressive web app features'
      ],
      //price: 'Starting from $300'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, target audience, and project goals to create a detailed plan.'
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Creating wireframes, mockups, and interactive prototypes for your approval before development.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your project using modern technologies with regular updates and feedback sessions.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing, optimization, and deployment with ongoing support and maintenance.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Web Design & <span className="text-glow">UI/UX Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your ideas into beautiful, functional web applications. 
            I specialize in creating modern, responsive designs that deliver exceptional user experiences.
          </p>
          <Link to="/contact">
            <Button className="btn-gradient">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">What I Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development and design services tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 space-y-6 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className={`text-${service.color} font-semibold`}>{service.price}</p>
                  </div>
                </div>

                <p className="text-muted-foreground">{service.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                  <Button variant="outline" className="w-full hover:bg-primary/10 hover:border-primary">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gradient-card">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">My Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure your project is delivered on time and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center space-y-4 hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Me */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold">Why Choose My Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Technical Excellence</h4>
                  <p className="text-muted-foreground text-sm">IIT Kharagpur graduate with strong technical foundation and industry experience at Samsung R&D.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Modern Technologies</h4>
                  <p className="text-muted-foreground text-sm">Using latest web technologies, frameworks, and best practices for optimal performance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-glass border border-accent/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Attention to Detail</h4>
                  <p className="text-muted-foreground text-sm">Meticulous approach ensuring every pixel is perfect and every interaction is smooth.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Timely Delivery</h4>
                  <p className="text-muted-foreground text-sm">Professional work ethic with commitment to deadlines and project milestones.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-scale-in">
            <div className="glass-card p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Start?</h3>
              <p className="text-muted-foreground">
                Let's discuss your project and bring your vision to life with modern web technologies.
              </p>
              <div className="space-y-4">
                <Link to="/contact">
                  <Button className="btn-gradient w-full">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="w-full hover:bg-secondary/10 hover:border-secondary">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h4 className="text-lg font-bold">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 vikasbastewad24@gmail.com</p>
                <p>📱 +91 8830475325</p>
                <p>🕒 Response time: Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="text-center bg-gradient-hero">
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Let's work together to create something amazing. From concept to deployment, 
            I'll help you build the perfect web solution.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Services;