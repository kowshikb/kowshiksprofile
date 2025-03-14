
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Trophy } from "lucide-react";

interface Award {
  year: number;
  title: string;
  description: string;
}

const awards: Award[] = [
  {
    year: 2013,
    title: "Top 6000/3.5 Lakh",
    description: "EAMCET"
  },
  {
    year: 2019,
    title: "Winner",
    description: "PTW's Bug Bounty"
  },
  {
    year: 2023,
    title: "Winner",
    description: "Qapitol's Testing Hackathon"
  }
];

const Awards: React.FC = () => {
  return (
    <AnimatedSection id="awards" delay={500}>
      <h2 className="section-title">Awards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {awards.map((award, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl border border-border flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
          >
            <div className="w-12 h-12 mb-3 rounded-full bg-secondary/50 flex items-center justify-center text-primary">
              <Trophy size={20} />
            </div>
            <span className="text-sm font-medium text-primary">{award.year}</span>
            <h3 className="font-semibold mt-1">{award.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{award.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Awards;
