"use client";

import { useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';

export default function AchievementsContainer({ starredAchievements, allAchievements }) {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const displayedAchievements = showAllAchievements ? allAchievements : starredAchievements;
  
  const isStarred = (achievement) => {
    return starredAchievements.some(starredAchievement => starredAchievement.slug === achievement.slug);
  };

  return (
    <>
      <div className="space-y-4">
        {displayedAchievements.map((achievement) => (
          <article key={achievement.slug} className="border dark:border-gray-800 rounded-lg p-6 hover:border-pink-500 transition-colors relative">
            {isStarred(achievement) && (
              <span className="absolute top-2 right-2 text-yellow-400 text-xl" title="Starred Achievement">
                ★
              </span>
            )}
            <div className="block">
              <time className="text-sm text-gray-500">{achievement.date}</time>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              
              {/* Display MDX content */}
              <div className="mt-4 prose dark:prose-invert">
                {achievement.content && (
                  <MDXRemote {...achievement.content} />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {!showAllAchievements && starredAchievements.length < allAchievements.length && (
        <div className="mt-6 text-center">
          <button 
            onClick={() => setShowAllAchievements(true)}
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-pink-700 transition-colors"
          >
            Show All
          </button>
        </div>
      )}
    </>
  );
}
