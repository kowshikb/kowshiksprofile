
import React from "react";

interface InterestTagProps {
  name: string;
}

const InterestTag: React.FC<InterestTagProps> = ({ name }) => {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80 text-sm transition-all hover:translate-y-[-2px] cursor-default">
      {name}
    </div>
  );
};

export default InterestTag;
