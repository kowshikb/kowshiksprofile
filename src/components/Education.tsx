
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  year: string;
  location: string;
  grade: string;
}

const educationData: EducationItem[] = [
  {
    id: "vrsec",
    institution: "VRSEC",
    degree: "Bachelors in Electronics",
    year: "May 2017",
    location: "Vijayawada, AP",
    grade: "CGPA: 7.3 / 10"
  },
  {
    id: "chaitanya",
    institution: "Sri Chaitanya College",
    degree: "Class XII",
    year: "May 2013",
    location: "Vijayawada, AP",
    grade: "Percentage: 93.5"
  },
  {
    id: "kvr",
    institution: "KVR Talent School",
    degree: "Class X",
    year: "May 2011",
    location: "Kovvur, AP",
    grade: "Percentage: 87.5"
  }
];

const Education: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    vrsec: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <AnimatedSection id="education" delay={300}>
      <h2 className="section-title">Education</h2>
      
      <div className="space-y-4">
        {educationData.map((item) => (
          <div 
            key={item.id}
            className="rounded-xl overflow-hidden border border-border bg-white transition-all duration-300 hover:shadow-md"
          >
            <div 
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(item.id)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-full bg-secondary/70">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.institution}</h3>
                  <p className="text-sm text-muted-foreground">{item.degree}</p>
                </div>
              </div>
              <button 
                className="p-1 rounded-full hover:bg-secondary transition-colors"
                aria-label={expandedItems[item.id] ? "Collapse" : "Expand"}
              >
                {expandedItems[item.id] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
            </div>
            
            <div className={`smooth-accordion ${expandedItems[item.id] ? "open" : ""}`}>
              <div className="px-4 pb-4 pl-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Year: </span>
                    <span>{item.year}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location: </span>
                    <span>{item.location}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Grade: </span>
                    <span>{item.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;
