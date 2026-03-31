
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  grade: string;
}

const educationData: EducationItem[] = [
  { institution: "VRSEC", degree: "Bachelors in Electronics", year: "2017", grade: "CGPA: 7.3 / 10" },
  { institution: "Sri Chaitanya College", degree: "Class XII", year: "2013", grade: "93.5%" },
  { institution: "KVR Talent School", degree: "Class X", year: "2011", grade: "87.5%" }
];

const Education: React.FC = () => {
  return (
    <AnimatedSection id="education" delay={300}>
      <h2 className="section-title">Education</h2>

      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div key={index} className="flex justify-between items-start border-b border-border pb-5 last:border-0 last:pb-0">
            <div>
              <h3 className="font-medium" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {item.institution}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">{item.degree}</p>
            </div>
            <div className="text-right text-sm text-muted-foreground shrink-0 ml-4">
              <p>{item.year}</p>
              <p className="mt-0.5">{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;
