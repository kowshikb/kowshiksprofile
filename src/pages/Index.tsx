
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
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 max-w-3xl py-4">
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <SocialLinks />
        <Awards />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
