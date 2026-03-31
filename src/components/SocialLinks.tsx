
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Github, Globe, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { name: "Website", url: "https://kowshikb.github.io/MyWebSite/", icon: <Globe className="w-4 h-4" /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/kowshik-kumar-7b6461b6/", icon: <Linkedin className="w-4 h-4" /> },
  {
    name: "LeetCode", url: "https://leetcode.com/kowshik1729/",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
  },
  { name: "GitHub", url: "https://github.com/kowshikb", icon: <Github className="w-4 h-4" /> },
  { name: "Instagram", url: "https://www.instagram.com/kowshiks_profile/", icon: <Instagram className="w-4 h-4" /> }
];

const SocialLinks: React.FC = () => {
  return (
    <AnimatedSection id="links" delay={400}>
      <h2 className="section-title">Links</h2>

      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all group"
          >
            {link.icon}
            {link.name}
            <ArrowUpRight size={12} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default SocialLinks;
