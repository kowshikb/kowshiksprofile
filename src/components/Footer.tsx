
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bikkina Kowshik Kumar · 7.7 Years in QA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
