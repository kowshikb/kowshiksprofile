
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronDown } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  points: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: "skillsoft",
    company: "SkillSoft",
    position: "Senior QA Engineer",
    points: [
      "Automated 70+ features of an Edutech platform, including assignment creation, skill benchmarks, banners, live courses, and dynamic content. Reduced release time from 3 days to just 2 hours.",
      "Engineered an automation framework with Playwright and JavaScript.",
      "Integrated UI and API tests to meet sales team needs.",
      "Integrated Jenkins for automated build and test workflows.",
      "Integrated Docker in CI/CD pipelines for scalable test execution.",
      "Managed team members across manual, functional, and automation tasks."
    ]
  },
  {
    id: "qapitol",
    company: "Qapitol QA",
    position: "Senior Software Test Engineer",
    points: [
      "Transformed credit card application process using Selenium with Java and TestNG. Reduced user onboarding time by 90%.",
      "Automated card management and on-boarding APIs using Rest Assured.",
      "Reduced smoke and sanity suite execution time by 40%.",
      "Increased functional test coverage by 20% by automating new features."
    ]
  },
  {
    id: "ptw",
    company: "PTW",
    position: "Senior Software Test Engineer",
    points: [
      "Expanded regression and smoke suites using Java with Selenium, TestNG, and POM design pattern.",
      "Integrated Jenkins for continuous integration and automated test execution.",
      "Manually tested key functional areas of an E-commerce site."
    ]
  },
  {
    id: "ea",
    company: "EA",
    position: "QA One",
    points: [
      "Learned test case writing, various testing techniques, and Agile methodology.",
      "Tested new features of a popular life simulation game."
    ]
  }
];

const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({ skillsoft: true });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <AnimatedSection id="experience" delay={100}>
      <h2 className="section-title">Experience</h2>

      <div className="space-y-3">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="border-b border-border last:border-0 pb-3 last:pb-0"
          >
            <div
              className="py-3 flex justify-between items-center cursor-pointer group"
              onClick={() => toggleExpand(item.id)}
            >
              <div>
                <h3 className="text-lg font-medium" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {item.company}
                </h3>
                <p className="text-sm text-muted-foreground">{item.position}</p>
              </div>
              <ChevronDown
                size={16}
                className={`text-muted-foreground transition-transform duration-300 ${
                  expandedItems[item.id] ? "rotate-180" : ""
                }`}
              />
            </div>

            <div className={`smooth-accordion ${expandedItems[item.id] ? "open" : ""}`}>
              <ul className="space-y-2 pb-3 text-sm text-foreground/70">
                {item.points.map((point, index) => (
                  <li key={index} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-border">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
