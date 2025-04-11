import Image from "next/image";

function Skill({ icon, text }) {
  return (
    <span className="skill-tag">
      {icon} {text}
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
        {/* <Skill icon="⚛️" text="React.js" />
        <Skill icon="🟨" text="Javascript" />
        <Skill icon="▲" text="Next.js" />
        <Skill icon="🤖" text="OpenAI API" />
        <Skill icon="📦" text="Node.js" />
        <Skill icon="🎨" text="Material UI" />
        <Skill icon="🎯" text="TypeScript" />
        <Skill icon="🌐" text="HTML" />
        <Skill icon="🎨" text="CSS" /> */}
        <Skill icon="🐙" text="Git" />
      </div>

      <p className="text-gray-600 dark:text-gray-300">
        I write about my experiences as a developer, share tips and tricks, and occasionally review books that inspire me.
      </p>
    </section>
  );
} 