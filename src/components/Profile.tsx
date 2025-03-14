
import React from "react";
import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import InterestTag from "./InterestTag";

const Profile: React.FC = () => {
  return (
    <AnimatedSection id="profile" className="mt-24 sm:mt-32">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-white/50 shadow-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm animate-pulse-soft">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/80 to-purple-500/80 flex items-center justify-center text-white text-5xl font-bold">
              BK
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-bold">Bikkina Kowshik Kumar</h2>
          <div className="mt-1 flex items-center">
            <Briefcase size={16} className="mr-2 text-primary" />
            <span className="text-muted-foreground">QA & Test Automation</span>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Profile</h3>
            <p className="text-muted-foreground leading-relaxed">
              Quality Assurance professional with 7.4 years of experience specializing in test automation 
              for web, mobile, and API platforms. Experienced in building and maintaining automation 
              frameworks with JavaScript, Java, and Python. Strong focus on improving release 
              efficiency and delivery quality.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Interests</h3>
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
