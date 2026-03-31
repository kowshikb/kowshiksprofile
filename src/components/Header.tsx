
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionId = section.getAttribute("id") || "";
        if (window.scrollY >= el.offsetTop - 100 && window.scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "profile", label: "Profile" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "links", label: "Links" },
    { id: "awards", label: "Awards" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 bg-background/90 backdrop-blur-sm border-b border-border" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <button onClick={() => scrollToSection("profile")} className="text-lg font-normal tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Kowshik Kumar
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link text-muted-foreground ${
                    activeSection === item.id ? "text-foreground" : ""
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="block md:hidden">
          <button
            className="p-2 text-muted-foreground"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border py-4 animate-fade-in">
        <nav className="container mx-auto px-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    document.getElementById("mobile-menu")?.classList.add("hidden");
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                    activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
