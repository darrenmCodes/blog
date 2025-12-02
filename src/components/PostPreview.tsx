import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';

interface PostPreviewProps {
  post: PostMetadata;
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="group cursor-pointer py-10 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="flex flex-col mb-3">
          <span className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2">
            {post.date}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
            {post.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300">
            {post.category}
          </span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </article>
    </Link>
  );
}

