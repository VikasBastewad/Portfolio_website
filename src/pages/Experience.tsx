import { Building2, Calendar, MapPin, Trophy } from 'lucide-react';
import Section from '@/components/ui/section';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Samsung R&D Institute, Delhi',
      period: 'Jul 2024 – Present',
      type: 'Full-time',
      location: 'Delhi, India',
      responsibilities: [
        'Maintaining Ethernet Switch device drivers for Samsung Tizen TVs',
        'Developing and debugging Linux device drivers',
        'Ensuring performance and stability of platform integrations',
        'Collaborating with global teams on critical system components'
      ],
      technologies: ['C', 'C++', 'Linux Kernel', 'Device Drivers', 'Tizen OS', 'Git', 'Perforce'],
      icon: Building2,
      color: 'primary'
    },
    {
      title: 'Software Developer Intern',
      company: 'Samsung R&D Institute, Delhi',
      period: 'May – Jul 2023',
      type: 'Internship',
      location: 'Delhi, India',
      responsibilities: [
        'Contributed to TV-Guard project for secure TV lock/unlock via online mode',
        'Implemented OTP system in C++ with robust encryption research',
        'Developed regional customization features for global markets',
        'Presented proposal to global Samsung teams with positive feedback'
      ],
      technologies: ['C++', 'Encryption', 'OTP Systems', 'Regional Localization'],
      icon: Trophy,
      color: 'secondary'
    }
  ];

  const achievements = [
    {
      title: 'Global Team Presentation',
      description: 'Successfully presented TV-Guard offline unlocking feature project proposal to Samsung global teams',
      impact: 'Received positive feedback and project approval'
    },
    {
      title: 'Critical System Maintenance',
      description: 'Maintaining ethernet switch drivers for Samsung Tizen TV platform',
      impact: 'Ensuring stable performance for millions of users worldwide'
    },
    {
      title: 'Innovation in Security',
      description: 'Implemented advanced OTP encryption system for TV security',
      impact: 'Enhanced security protocols for Samsung TV products'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Professional <span className="text-glow">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in software development, from internship to full-time roles, 
            working on critical systems at Samsung R&D Institute.
          </p>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building expertise in Linux device drivers and system-level programming
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Company Info */}
                  <div className="lg:w-1/3 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-${exp.color} rounded-lg flex items-center justify-center`}>
                        <exp.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className={`inline-block bg-${exp.color}/20 text-${exp.color} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-muted/50 text-foreground px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Achievements */}
      <Section className="bg-gradient-card">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Key Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notable accomplishments and contributions during my professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 space-y-4 text-center hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
                <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold inline-block">
                  {achievement.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Developed */}
      <Section>
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Skills Developed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technical and professional skills gained through hands-on experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold mb-2">System Programming</h4>
              <p className="text-sm text-muted-foreground">Linux kernel development</p>
            </div>
            <div className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold mb-2">Device Drivers</h4>
              <p className="text-sm text-muted-foreground">I2C, GPIO, Ethernet drivers</p>
            </div>
            <div className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold mb-2">Security Systems</h4>
              <p className="text-sm text-muted-foreground">OTP, encryption protocols</p>
            </div>
            <div className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold mb-2">Global Collaboration</h4>
              <p className="text-sm text-muted-foreground">Cross-team communication</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;