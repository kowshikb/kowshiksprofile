
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface Award {
  year: number;
  title: string;
  description: string;
}

const awards: Award[] = [
  { year: 2013, title: "Top 6000 / 3.5 Lakh", description: "EAMCET" },
  { year: 2019, title: "Winner", description: "PTW's Bug Bounty" },
  { year: 2023, title: "Winner", description: "Qapitol's Testing Hackathon" }
];

const Awards: React.FC = () => {
  return (
    <AnimatedSection id="awards" delay={500}>
      <h2 className="section-title">Awards</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="text-center">
            <p className="text-sm text-muted-foreground">{award.year}</p>
            <h3 className="text-lg mt-1" style={{ fontFamily: "'DM Serif Display', serif" }}>
              {award.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{award.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Awards;
