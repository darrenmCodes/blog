import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The post you're looking for doesn't exist.
          </p>
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}

