
import React from "react";

interface InterestTagProps {
  name: string;
}

const InterestTag: React.FC<InterestTagProps> = ({ name }) => {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-default">
      {name}
    </span>
  );
};

export default InterestTag;
