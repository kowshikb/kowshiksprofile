
import React, { useState, useEffect } from "react";
import { Phone, Mail, Link as LinkIcon } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-md" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold tracking-tight transition-all">
          <span className="text-primary">Kowshik</span> Kumar
        </h1>
        
        <div className="hidden md:flex items-center space-x-2 text-sm">
          <Phone size={14} className="text-primary" />
          <span className="mr-4">9502243553</span>
          
          <Mail size={14} className="text-primary" />
          <a 
            href="mailto:bikkinakowshik543@gmail.com" 
            className="hover:text-primary transition-colors"
          >
            bikkinakowshik543@gmail.com
          </a>
        </div>
        
        <nav className="hidden lg:block">
          <ul className="flex space-x-1">
            {[
              { id: "profile", label: "Profile" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "education", label: "Education" },
              { id: "links", label: "Links" },
              { id: "awards", label: "Awards" }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${
                    activeSection === item.id 
                      ? "text-primary bg-secondary/50" 
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="block lg:hidden">
          <button 
            className="p-2 rounded-lg hover:bg-secondary/70 transition-colors"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu");
              mobileMenu?.classList.toggle("hidden");
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className="hidden lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md shadow-md py-4 animate-fade-in"
      >
        <nav className="container mx-auto px-4">
          <ul className="space-y-2">
            {[
              { id: "profile", label: "Profile" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "education", label: "Education" },
              { id: "links", label: "Links" },
              { id: "awards", label: "Awards" }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    const mobileMenu = document.getElementById("mobile-menu");
                    mobileMenu?.classList.add("hidden");
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? "text-primary bg-secondary/50" 
                      : "hover:bg-secondary/30"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 px-4 pt-4 border-t border-gray-100 flex flex-col space-y-2 text-sm">
            <div className="flex items-center">
              <Phone size={14} className="text-primary mr-2" />
              <span>9502243553</span>
            </div>
            
            <div className="flex items-center">
              <Mail size={14} className="text-primary mr-2" />
              <a 
                href="mailto:bikkinakowshik543@gmail.com" 
                className="hover:text-primary transition-colors overflow-hidden text-ellipsis"
              >
                bikkinakowshik543@gmail.com
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
