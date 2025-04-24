"use client";

import React, { useState } from 'react';
import Link from "next/link";
import TechnologyIcons from './TechnologyIcons';

export default function PostsContainer({ starredPosts, allPosts }) {
  const [showAllPosts, setShowAllPosts] = useState(false);
  const displayedPosts = showAllPosts ? allPosts : starredPosts;
  
  // Check if a post is in the starredPosts array
  const isStarred = (post) => {
    return starredPosts.some(starredPost => starredPost.slug === post.slug);
  };

  return (
    <>
      <div className="space-y-4">
        {displayedPosts.map((post) => (
          <article key={post.slug} className="border dark:border-gray-800 rounded-lg p-6 hover:border-pink-500 transition-colors relative">
            {isStarred(post) && (
              <span className="absolute top-2 right-2 text-yellow-400 text-xl" title="Starred Post">
                ★
              </span>
            )}
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
      
      {!showAllPosts && starredPosts.length < allPosts.length && (
        <div className="mt-6 text-center">
          <button 
            onClick={() => setShowAllPosts(true)}
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-pink-700 transition-colors"
          >
            Show All
          </button>
        </div>
      )}
    </>
  );
}
