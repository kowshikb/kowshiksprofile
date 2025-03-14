
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import SocialLinks from "@/components/SocialLinks";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "Bikkina Kowshik Kumar | QA Engineer";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header />
      
      <div className="container mx-auto px-4 py-4 relative">
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <SocialLinks />
        <Awards />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
