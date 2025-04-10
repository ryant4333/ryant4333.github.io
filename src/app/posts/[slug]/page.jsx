import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import TechnologyIcons from '@/components/TechnologyIcons' // Ensure this path is correct

// Mark as static page
export const dynamic = 'force-static'
export const dynamicParams = false

// This generates all the static paths at build time
export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// This is a static page component
export default async function Post({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto">
      <header className="mb-8">
        <time className="text-sm text-gray-500 mb-2 block">{post.date}</time>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">{post.description}</p>
        {post.technologies && <TechnologyIcons technologies={post.technologies} />}
      </header>
      <div className="prose dark:prose-invert prose-pink max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}