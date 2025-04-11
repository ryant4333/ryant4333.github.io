import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Hero from "@/components/Hero";
import TechnologyIcons from '@/components/TechnologyIcons'; // Ensure this path is correct

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Hero />

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
                {post.technologies && (
                  <div className="mt-4">
                    <TechnologyIcons technologies={post.technologies} />
                  </div>
                )}
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