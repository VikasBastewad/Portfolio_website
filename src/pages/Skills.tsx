import { Code2, Database, Globe, Laptop, Server, Users } from 'lucide-react';
import Section from '@/components/ui/section';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Programming Languages',
      icon: Code2,
      color: 'primary',
      skills: [
        { name: 'C', level: 90 },
        { name: 'C++', level: 95 },
        { name: 'Python', level: 70 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      category: 'Web Technologies',
      icon: Globe,
      color: 'secondary',
      skills: [
        { name: 'ReactJS', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Material UI', level: 90 }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: Laptop,
      color: 'secondary',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'PyCharm', level: 75 },
        { name: 'Perforce', level: 85 },
        { name: 'Bash', level: 80 }
      ]
    },
    {
      category: 'Libraries & Frameworks',
      icon: Server,
      color: 'primary',
      skills: [
        { name: 'STL', level: 90 },
        { name: 'RapidXml', level: 75 },
        { name: 'NumPy', level: 80 },
        { name: 'Pandas', level: 75 },
        { name: 'AWK', level: 70 },
        { name: 'LaTeX', level: 90 }
      ]
    }
  ];

  const softSkills = [
    {
      name: 'Punctual',
      description: 'Always deliver on time and respect deadlines',
      icon: '⏰'
    },
    {
      name: 'Obedient',
      description: 'Follow best practices and team guidelines',
      icon: '🎯'
    },
    {
      name: 'Workaholic',
      description: 'Passionate about continuous learning and improvement',
      icon: '💪'
    },
    {
      name: 'Problem Solving',
      description: 'Strong analytical thinking and debugging skills',
      icon: '🧩'
    },
    {
      name: 'Team Collaboration',
      description: 'Effective communication in cross-functional teams',
      icon: '🤝'
    },
    {
      name: 'Mathematics',
      description: 'Strong foundation in mathematical concepts',
      icon: '📐'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Technical <span className="text-glow">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional competencies 
            developed through education and hands-on experience.
          </p>
        </div>
      </Section>

      {/* Technical Skills */}
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficiency levels in various programming languages, frameworks, and tools
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {technicalSkills.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass-card p-6 space-y-6 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div
                          className={`bg-gradient-${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Soft Skills */}
      <Section className="bg-gradient-card">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Professional Qualities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Personal attributes and soft skills that complement my technical abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center space-y-4 hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skill Categories Overview */}
      <Section>
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Skill Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Organized view of my expertise across different domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <Server className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">System Programming</h3>
              <p className="text-sm text-muted-foreground">Linux, Device Drivers, Kernel</p>
            </div>

            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <Globe className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-bold mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground">Full-stack, React, Flask</p>
            </div>

            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <Database className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">Data & Analytics</h3>
              <p className="text-sm text-muted-foreground">NumPy, Pandas, SQL</p>
            </div>

            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary-glow" />
              <h3 className="font-bold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">Git, Agile, Teamwork</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Continuous Learning */}
      <Section>
        <div className="glass-card p-8 text-center space-y-6">
          <h2 className="text-2xl font-bold">Continuous Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I believe in staying updated with the latest technologies and best practices. 
            Currently exploring advanced system programming concepts, modern web frameworks, 
            and expanding my knowledge in distributed systems and cloud technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {/* <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm">Rust Programming</span> */}
            <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm">Docker & Kubernetes</span>
            <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">Cloud Computing</span>
            <span className="bg-primary-glow/20 text-primary-glow px-4 py-2 rounded-full text-sm">Machine Learning</span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;