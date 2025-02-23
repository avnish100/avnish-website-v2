import Navigation from '@/components/Navigation';
import { client } from '@/sanity/lib/client';
import { getRecentPosts, getProjects } from '@/sanity/lib/client'
import Arrow from "@/icons/Arrow"

interface BlogPost {
  title: string;
  publishedAt: string;
  excerpt: string;
  slug: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(date desc) {
    title,
    publishedAt,
    excerpt,
    "slug": slug.current
  }`;
  
  return await client.fetch(query);
}

// Convert to async component
export default async function Writing() {
  const blogPosts = await getBlogPosts();
  
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-medium mb-12">Writing</h1>
      
      <div className="space-y-0">
        {blogPosts.map((post, index) => (
          <a 
            href={`/writing/${post.slug}`}
            key={index} 
            className="border-t border-gray-200/10 py-4 hover:bg-white/5 transition-colors px-4 -mx-4 block group"
          >
            <article>
              <div className="grid grid-cols-[1fr,auto,auto,auto] items-center gap-8">
                <h2 className="text-lg font-normal hover:text-gray-300">
                  {post.title}
                </h2>
                <time className="text-[var(--secondary)] text-sm">{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</time>
                <span className="text-[var(--secondary)] text-sm">{/* Additional metadata */}</span>
                <span className="text-[var(--secondary)] text-sm flex items-center gap-1">
                  <Arrow className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </span>
              </div>
              <p className="text-[var(--secondary)] mt-2 text-sm hidden md:block">{post.excerpt}</p>
            </article>
          </a>
        ))}
      </div>
    </main>
  );
} 