
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-8 border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="text-sm">&copy; {new Date().getFullYear()} Bikkina Kowshik Kumar</p>
        <p className="text-xs mt-2">Total Experience: 7.7 Years in QA and Test Automation</p>
      </div>
    </footer>
  );
};

export default Footer;
