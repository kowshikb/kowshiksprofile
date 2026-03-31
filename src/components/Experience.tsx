
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronDown, ChevronUp } from "lucide-react";

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
      "Automated 70+ features of an Edutech platform, including assignment creation, skill benchmarks, banners, live courses, and dynamic content. Implemented test automation for various scenarios, such as smoke, regression, sanity, and release cases. Enabled end-to-end automation flows, reducing release time from 3 days to just 2 hours, ensuring faster and more efficient delivery of features.",
      "Engineered an automation framework with Playwright and JavaScript.",
      "Integrated UI and API tests to meet sales team needs.",
      "Used Git for version control.",
      "Integrated Jenkins for automated build and test workflows.",
      "Managed environments and maintained detailed logs.",
      "Integrated Docker in CI/CD pipelines to automate testing workflows and developed Docker images for test automation frameworks, facilitating rapid scaling and execution of tests across multiple environments.",
      "Managed team members across manual, functional, and automation tasks, ensuring smooth collaboration and timely execution of testing efforts."
    ]
  },
  {
    id: "qapitol",
    company: "Qapitol QA",
    position: "Senior Software Test Engineer",
    points: [
      "We have transformed the credit card application process by harnessing the power of Selenium with Java and TestNG. Through automation, we have significantly reduced the user onboarding time by 90%",
      "Automated card Management and On-boarding APIs using Rest assured",
      "Automated critical statement validation scenarios with Rest Assured",
      "Reduced smoke and sanity suite execution time by 40%.",
      "Increased functional test coverage by 20 percent by automating new features."
    ]
  },
  {
    id: "ptw",
    company: "PTW",
    position: "Senior Software Test Engineer",
    points: [
      "Expanded regression and smoke suites by incorporating new test cases to minimize manual testing efforts using Java with Selenium, TestNG, and the Page Object Model (POM) design pattern. Integrated Jenkins for seamless continuous integration and automated test execution.",
      "Manually tested key functional areas of an E-commerce site."
    ]
  },
  {
    id: "ea",
    company: "EA",
    position: "QA One",
    points: [
      "Learned how to write test cases, various testing techniques, usage of different tools, and Agile methodology as a fresher.",
      "Tested new features of a popular life simulation game."
    ]
  }
];

const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    skillsoft: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <AnimatedSection id="experience" delay={100}>
      <h2 className="section-title">Experience</h2>
      
      <div className="space-y-4">
        {experienceData.map((item) => (
          <div 
            key={item.id}
            className="rounded-xl overflow-hidden border border-border bg-white transition-all duration-300 hover:shadow-md"
          >
            <div 
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(item.id)}
            >
              <div>
                <h3 className="font-semibold text-lg">{item.company}</h3>
                <p className="text-sm text-muted-foreground">{item.position}</p>
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
              <div className="px-4 pb-4">
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {item.points.map((point, index) => (
                    <li 
                      key={index}
                      className="pl-2"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
