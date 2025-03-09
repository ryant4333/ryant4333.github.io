const createMDX = require('@next/mdx')

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx']
}

module.exports = withMDX(nextConfig) 