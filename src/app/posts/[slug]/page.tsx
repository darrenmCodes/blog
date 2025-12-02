import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getPosts } from '@/lib/posts';
import Header from '@/components/Header';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">
      <Header />

      <main className="max-w-2xl mx-auto px-6 pb-24">
        <article>
          <Link 
            href="/"
            className="group flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-10 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
              <span className="uppercase tracking-wider text-xs font-bold">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-mono border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div 
            className="prose prose-lg dark:prose-invert prose-gray max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100
              prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-8
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-blue-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:rounded-r-lg
              prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-20 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
            <span className="text-gray-500">&copy; {new Date().getFullYear()} Darren Maher</span>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Top of page</a>
          </div>
        </article>
      </main>
    </div>
  );
}

