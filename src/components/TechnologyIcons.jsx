import React from 'react';
import Image from 'next/image';

const iconMap = {
  python: { 
    src: '/icons/python.png', 
    alt: 'Python' 
  },
  react: { 
    src: '/icons/react.png', 
    alt: 'React' 
  },
  nextjs: { 
    src: '/icons/nextjs.png', 
    alt: 'Next.js' 
  },
  // Add more technologies as needed
};

export default function TechnologyIcons({ technologies }) {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-3 mt-4">
      {technologies.map(tech => {
        const icon = iconMap[tech.toLowerCase()];
        if (!icon) {
          console.warn(`Icon for technology "${tech}" not found.`);
          return null;
        }
        
        return (
          <div key={tech} className="flex items-center" title={icon.alt}>
            <Image 
              src={icon.src} 
              alt={icon.alt} 
              width={24} 
              height={24} 
              className="object-contain" 
            />
          </div>
        );
      })}
    </div>
  );
}

<TechnologyIcons technologies={['python', 'react', 'nextjs']} />