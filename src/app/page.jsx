import { getAllPosts } from "@/lib/posts";
import { getAllAchievements } from "@/lib/achievements";
import Hero from "@/components/Hero";
import PostsContainer from "@/components/PostsContainer";
import AchievementsContainer from "@/components/AchievementsContainer";

export default async function Home() {
  const posts = getAllPosts();
  const starredPosts = posts.filter(post => post.star === true);
  
  const achievements = await getAllAchievements();
  const starredAchievements = achievements.filter(achievement => achievement.star === true);

  return (
    <main>
      <Hero />

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <PostsContainer starredPosts={starredPosts} allPosts={posts} />
      </section>
      
      {/* Achievements */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Achievements</h2>
        <AchievementsContainer starredAchievements={starredAchievements} allAchievements={achievements} />
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