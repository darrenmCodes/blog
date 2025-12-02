import { getPosts } from '@/lib/posts';
import PostPreview from '@/components/PostPreview';
import Header from '@/components/Header';

export default function Home() {
  const posts = getPosts();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">
      <Header />

      <main className="max-w-2xl mx-auto px-6 pb-24">
        
        <div className="flex flex-col space-y-2">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 py-10">
              No posts yet. Add markdown files to the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">posts</code> folder to get started.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

