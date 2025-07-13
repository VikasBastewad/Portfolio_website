import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/vikas-profile.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div 
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg text-secondary font-medium">Hi, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Bastewad Vikas
                <br />
                <span className="text-glow">Vijaykumar</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Software Developer & Full-stack Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Crafting efficient systems and beautiful web experiences. 
              Computer Science Engineer from IIT Kharagpur, currently developing 
              Linux device drivers at Samsung R&D Institute.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Delhi, India</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio">
                <Button className="btn-gradient group">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </Button>
              </Link>
                <Button
                variant="outline"
                className="border-secondary/20 hover:border-secondary hover:bg-secondary/10"
                onClick={() => window.open('https://drive.google.com/file/d/1-ok3034EWOj6BoCKN-wOm5vE332svmvI/view?usp=drive_link', '_blank')}
                >
                <Download className="mr-2 h-4 w-4" />
                Resume
                </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative lg:justify-self-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-85 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img 
                  src={profileImage} 
                  alt="Vikas Bastewad" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-lg animate-glow-pulse opacity-80" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-secondary rounded-full animate-glow-pulse opacity-60" />
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Stats Section */}
      <Section className="bg-gradient-card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">10+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">7.65</div>
            <div className="text-muted-foreground">CGPA at IIT KGP</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-glow">Samsung</div>
            <div className="text-muted-foreground">Current Role</div>
          </div>
        </div>
      </Section>

      {/* Featured Skills Preview */}
      <Section>
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Core Expertise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized in Linux device driver development, full-stack web development, 
              and creating intuitive user experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto" />
              <h4 className="text-xl font-semibold">Linux Development</h4>
              <p className="text-muted-foreground">Device drivers, kernel modules, and system-level programming</p>
            </div>
            
            <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg mx-auto" />
              <h4 className="text-xl font-semibold">Full-stack Development</h4>
              <p className="text-muted-foreground">Full-stack applications with React, Flask, and modern frameworks</p>
            </div>
            
            <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-glass rounded-lg mx-auto border border-accent/30" />
              <h4 className="text-xl font-semibold">UI/UX Design</h4>
              <p className="text-muted-foreground">Creating beautiful, intuitive, and responsive user interfaces</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;