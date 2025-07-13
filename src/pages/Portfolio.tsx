import { ExternalLink, Github, Server, Database, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';

const Portfolio = () => {
  const projects = [
    {
      title: 'Hospital Management System',
      description: 'Comprehensive full-stack application for hospital operations with appointment booking, doctor dashboards, and automated notifications. Built with modern web technologies and deployed on cloud platforms.',
      image: '/api/placeholder/600/400',
      technologies: ['Flask', 'React', 'PostgreSQL', 'Azure', 'Netlify'],
      features: [
        'Patient appointment booking system',
        'Doctor dashboard with patient management',
        'Automated email notifications',
        'Real-time appointment status updates',
        'Secure authentication and authorization',
        'Responsive design for all devices'
      ],
      links: {
        // live: '#',
        // github: '#'
      },
      category: 'Full-stack',
      color: 'primary'
    },
    {
      title: 'Custom Shell Implementation',
      description: 'Linux-based shell implementation with advanced features including redirection, piping, wildcard support, and custom command handling. Demonstrates deep understanding of system programming.',
      image: '/api/placeholder/600/400',
      technologies: ['C', 'Linux', 'System Programming', 'Bash'],
      features: [
        'Input/output redirection',
        'Command piping support',
        'Wildcard pattern matching',
        'Built-in command implementation',
        'Process management',
        'Signal handling'
      ],
      links: {
        // github: '#'
      },
      category: 'System Programming',
      color: 'secondary'
    },
    {
      title: 'Virtual Memory Management',
      description: 'Advanced memory management library in C++ that simulates virtual memory operations, page allocation, and memory protection mechanisms.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'Memory Management', 'Data Structures'],
      features: [
        'Virtual memory simulation',
        'Page allocation algorithms',
        'Memory protection implementation',
        'Efficient data structures',
        'Performance optimization',
        'Memory leak detection'
      ],
      links: {
        // github: '#'
      },
      category: 'System Programming',
      color: 'accent'
    }
  ];

  const categories = ['All', 'Full-stack', 'System Programming', 'UI/UX'];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            My <span className="text-glow">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects, from system-level programming 
            to full-stack web applications, demonstrating problem-solving skills 
            and modern development practices.
          </p>
        </div>
      </Section>

      {/* Filter Tabs */}
      <Section className="py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "btn-gradient" : "hover:bg-primary/10 hover:border-primary"}
            >
              {category}
            </Button>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center animate-slide-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="glass-card p-4 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className={`w-16 h-16 bg-gradient-${project.color} rounded-lg mx-auto flex items-center justify-center`}>
                        {project.category === 'Full-stack' ? (
                          <Globe className="h-8 w-8 text-white" />
                        ) : project.category === 'System Programming' ? (
                          <Server className="h-8 w-8 text-white" />
                        ) : (
                          <Smartphone className="h-8 w-8 text-white" />
                        )}
                      </div>
                      <p className="text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 bg-${project.color}/20 text-${project.color} rounded-full text-sm font-semibold`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-lg">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-muted/50 text-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.links.live && (
                    <Button className="btn-gradient">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" className="hover:bg-secondary/10 hover:border-secondary">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Highlights */}
      <Section className="bg-gradient-card">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Technical Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key technical achievements and capabilities demonstrated across my projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <Server className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">System Programming</h3>
              <p className="text-sm text-muted-foreground">Low-level programming, memory management, shell implementation</p>
            </div>

            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <Database className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-bold mb-2">Database Design</h3>
              <p className="text-sm text-muted-foreground">PostgreSQL, efficient queries, data modeling</p>
            </div>

            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <Globe className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">Full-stack Development</h3>
              <p className="text-sm text-muted-foreground">React frontend, Flask backend, API design</p>
            </div>

            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary-glow" />
              <h3 className="font-bold mb-2">Responsive Design</h3>
              <p className="text-sm text-muted-foreground">Mobile-first, cross-platform compatibility</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      {/* <Section className="text-center">
        <div className="glass-card p-8 space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold">Interested in Working Together?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to take on new challenges and build innovative solutions. 
            Let's discuss how I can help bring your project to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-gradient">
              Hire Me for Your Project
            </Button>
            <Button variant="outline" className="hover:bg-primary/10 hover:border-primary">
              Download Resume
            </Button>
          </div>
        </div>
      </Section> */}
    </div>
  );
};

export default Portfolio;