import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I&apos;m <span className="text-pink-500">Ryan Taylor</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Software Engineer crafting AI-powered solutions with expertise in data science and backend engineering.
        </p>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Skill icon="⚛️" text="React.js" />
          <Skill icon="🟨" text="Javascript" />
          <Skill icon="▲" text="Next.js" />
          <Skill icon="🤖" text="OpenAI API" />
          <Skill icon="📦" text="Node.js" />
          <Skill icon="🎨" text="Material UI" />
          <Skill icon="🎯" text="TypeScript" />
          <Skill icon="🌐" text="HTML" />
          <Skill icon="🎨" text="CSS" />
          <Skill icon="🐙" text="Git" />
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          I write about my experiences as a developer, share tips and tricks, and occasionally review books that inspire me.
        </p>
      </section>

      {/* Blog Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border dark:border-gray-800 rounded-lg p-6 hover:border-pink-500 transition-colors">
              <Link href={`/posts/${post.slug}`} className="block">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Skill({ icon, text }) {
  return (
    <span className="skill-tag">
      {icon} {text}
    </span>
  );
} 