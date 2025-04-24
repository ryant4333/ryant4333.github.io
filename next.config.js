const createMDX = require('@next/mdx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  // Configure pageExtensions to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'mdx']
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)