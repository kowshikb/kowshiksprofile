
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { title: "Programming", skills: ["JavaScript", "Java", "Python"] },
  { title: "Familiar", skills: ["HTML", "CSS", "Gherkin"] },
  { title: "Platforms", skills: ["Web", "API", "Mobile"] },
  { title: "Frameworks", skills: ["Playwright", "Selenium", "TestNG", "Rest Assured"] },
  { title: "Test Approaches", skills: ["Agile/Scrum", "SDLC", "STLC", "Bug Life Cycle"] },
  { title: "Tools", skills: ["Jira", "Postman", "Git", "GitHub", "Testrail", "Docker", "Maven", "Excel", "Jenkins"] },
  { title: "IDEs", skills: ["VSCode", "Eclipse", "IntelliJ"] }
];

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" delay={200}>
      <h2 className="section-title">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 border border-border rounded-full text-sm text-foreground/80 hover:border-foreground/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
