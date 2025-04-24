import Image from "next/image";
import { iconMap } from "../components/TechnologyIcons";

function Skill({ tech }) {
  const icon = iconMap[tech.toLowerCase()];
  if (!icon) return null;
  
  return (
    <span className="skill-tag flex items-center gap-1 bg-gray-100 dark:bg-gray-800 py-1 px-3 rounded-full">
      <Image 
        src={icon.src} 
        alt={icon.alt} 
        width={16} 
        height={16} 
        className="object-contain" 
      />
      <span>{icon.alt}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="mb-16">
      <div className="flex items-start gap-12 mb-8">
        <div className="flex-none">
          <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
            Hi, I&apos;m <span className="text-emerald-600">Ryan Taylor</span>
          </h1>
          <div className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Software Engineer
          </div>
          <div className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
            📍 Based in Brisbane, Australia
          </div>
        </div>
        <div className="grow hidden md:flex justify-center items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/CloseupPromo.jpg"
              alt="Ryan Taylor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Software Engineer crafting AI-powered solutions with expertise in data science and backend engineering.
      </p>
      
      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Skill tech="python" />
        <Skill tech="csharp" />
        <Skill tech="azure" />
        
      </div>

      <p className="text-gray-600 dark:text-gray-300">
        Curiosity driven I love to explore new technologies and find innovative solutions to complex problems.
      </p>
    </section>
  );
}