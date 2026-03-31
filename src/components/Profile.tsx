
import React from "react";
import AnimatedSection from "./AnimatedSection";
import InterestTag from "./InterestTag";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Mail, Phone } from "lucide-react";

const Profile: React.FC = () => {
  return (
    <AnimatedSection id="profile" className="mt-28">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-border">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/e98187f6-d16d-4ef6-adbd-fb9ab5680509.png" alt="Kowshik Kumar" />
              <AvatarFallback className="w-full h-full rounded-full bg-muted flex items-center justify-center text-foreground text-4xl">
                BK
              </AvatarFallback>
            </Avatar>
          </div>
          <h2 className="mt-5 text-2xl tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Bikkina Kowshik Kumar
          </h2>
          <p className="text-muted-foreground text-sm mt-1">QA Engineer · 7.7 Years</p>
          
          <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:bikkinakowshik543@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={14} />
              bikkinakowshik543@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              9502243553
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">About</h3>
            <p className="text-foreground/80 leading-relaxed">
              Quality Assurance professional with 7.7 years of experience specializing in test automation
              for web, mobile, and API platforms. Experienced in building and maintaining automation
              frameworks with JavaScript, Java, and Python. Strong focus on improving release
              efficiency and delivery quality.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              <InterestTag name="Trading" />
              <InterestTag name="Cricket" />
              <InterestTag name="Geopolitics" />
              <InterestTag name="Competitive Coding" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Profile;
