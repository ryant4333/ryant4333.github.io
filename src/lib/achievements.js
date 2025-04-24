import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const achievementsDirectory = path.join(process.cwd(), 'content/achievements');

export async function getAllAchievements() {
  const fileNames = fs.readdirSync(achievementsDirectory);
  
  const allAchievementsData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string for its frontmatter
    const fullPath = path.join(achievementsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the achievement metadata section
    const { data, content } = matter(fileContents);

    // Serialize the MDX content for client-side rendering
    const mdxSource = await serialize(content);

    // Combine the data with the slug
    return {
      slug,
      content: mdxSource,
      ...data,
    };
  }));

  // Sort achievements by date in descending order
  return allAchievementsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
