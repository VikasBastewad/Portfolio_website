import { Calendar, GraduationCap, Star } from 'lucide-react';
import Section from '@/components/ui/section';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Indian Institute of Technology Kharagpur',
      year: '2024',
      grade: 'CGPA 7.65',
      icon: GraduationCap,
    },
    {
      degree: 'Class XII',
      institution: 'Shri Shivaji Junior College, Nanded',
      year: '2020',
      grade: '92.92%',
      icon: Star,
    },
    {
      degree: 'Class X',
      institution: 'Zilla Parishad High School, Barad',
      year: '2018',
      grade: '97.60%',
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="text-glow">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a strong foundation in computer science 
            and a love for solving complex problems through code.
          </p>
        </div>
      </Section>

      {/* Bio Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I am a Computer Science and Engineering graduate from IIT Kharagpur, 
                currently working as a Software Developer at Samsung R&D Institute, Delhi. 
                My work focuses on Linux device drivers, where I develop and maintain 
                critical system components for Samsung Tizen TVs.
              </p>
              <p>
                I'm passionate about crafting performant systems and intuitive web applications. 
                With a strong interest in mathematics and problem-solving, I thrive in 
                challenging environments that require both technical expertise and creative thinking.
              </p>
              <p>
                Beyond my professional work, I enjoy building full-stack web applications 
                and exploring the intersection of technology and user experience design. 
                I believe in writing clean, efficient code that not only works but also 
                contributes to a better digital world.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-scale-in">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-semibold">Delhi, India</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Role</span>
                  <span className="font-semibold">Software Developer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Company</span>
                  <span className="font-semibold">Samsung R&D</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Specialization</span>
                  <span className="font-semibold">Linux Drivers</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Interests</span>
                  <span className="font-semibold">Math, Web Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Timeline */}
      <Section className="bg-gradient-card">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Education Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey that laid the foundation for my technical expertise
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 glass-card p-6 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    {item.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Personal Values */}
      <Section>
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">What Drives Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The values and principles that guide my work and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 space-y-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <h3 className="text-xl font-bold">Punctual</h3>
              <p className="text-muted-foreground">
                I believe in respecting time - both mine and others'. Delivering on time, every time.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-white">O</span>
              </div>
              <h3 className="text-xl font-bold">Obedient</h3>
              <p className="text-muted-foreground">
                Following best practices, respecting team decisions, and maintaining professional standards.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-glass border border-accent/30 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">W</span>
              </div>
              <h3 className="text-xl font-bold">Workaholic</h3>
              <p className="text-muted-foreground">
                Passionate about what I do, always striving for excellence and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;