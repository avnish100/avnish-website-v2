import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { getRecentPosts, getProjects } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Arrow from '@/icons/Arrow';

export default async function Home() {
  const recentPosts = await getRecentPosts()
  const projects = await getProjects()
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <section className="space-y-8 mb-16">
        <h1 className="text-4xl font-bold text-center">
          Hey there, I am Avnish Jha
        </h1>

        <p className="text-[var(--secondary)] leading-relaxed">
          I am a Software Dev with experience working at Zebra Technologies and Deloitte. I am interested in everying digital and 
          learning how the world we see today through our screens work. I am skilled in web technologies and take pride in 
          making performant and beautiful websites. My world revolves around tech, startups and the product space. I love taking 
          <a href="/photos" className="text-white hover:underline"> photos</a> as well and 
          <a href="https://thedelhiwalla.com" className="text-white hover:underline"> TheDelhiwalla</a> is an immense inspiration.
        </p>

        <p className="text-[var(--secondary)] leading-relaxed">
          I love to discuss ideas new ideas and learn new things and 
          <a href="/writing" className="text-white hover:underline"> write</a> along the way. This site serves as a personal 
          repository to share everything I am currently building, learning or seeing so feel free to explore and reach out if you 
          wanna collaborate, chat about the next big idea or discuss why V10s should make a come-back to F1.
        </p>

        <div className="flex justify-center space-x-6 my-8">
          <a href="https://twitter.com/avnisharyan" className="text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* Twitter/X icon */}
            </svg>
          </a>
          <a href="https://linkedin.com/in/avnisharyan" className="text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* LinkedIn icon */}
            </svg>
          </a>
          <a href="https://github.com/avnisharyan" className="text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* GitHub icon */}
            </svg>
          </a>
        </div>

        <div className="flex justify-center">
          <a 
            href="mailto:contact@avnisharyanjha.com" 
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Let's Collaborate
          </a>
        </div>
      </section>

      <section className="space-y-0">
        <h2 className="text-2xl font-medium mb-6">Experience</h2>
        <div className="border-t border-gray-200/10">
          <div className="grid grid-cols-[1fr,auto,auto,auto] items-baseline gap-8 py-6 hover:bg-white/5 transition-colors px-4 -mx-4">
            <span className="font-normal">Deloitte</span>
            <span className="text-[var(--secondary)] text-sm">Software Engineer</span>
            <span className="text-[var(--secondary)] text-sm">2023-Present</span>
            <span className="text-[var(--secondary)] text-sm">Current</span>
          </div>
        </div>
        <div className="border-t border-gray-200/10">
          <div className="grid grid-cols-[1fr,auto,auto,auto] items-baseline gap-8 py-6 hover:bg-white/5 transition-colors px-4 -mx-4">
            <span className="font-normal">Zebra Technologies</span>
            <span className="text-[var(--secondary)] text-sm">Software Engineer</span>
            <span className="text-[var(--secondary)] text-sm">2023-2023</span>
            <span className="text-[var(--secondary)] text-sm">Past</span>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-medium mb-6">Recent Posts</h2>
        <div className="space-y-0">
          {recentPosts.map((post: any) => (
            <Link
              href={`/writing/${post.slug.current}`}
              key={post._id}
              className="block border-t border-gray-200/10 group"
            >
              <div className="grid grid-cols-[1fr,auto,auto] items-baseline gap-8 py-6 hover:bg-white/5 transition-colors px-4 -mx-4">
                <h3 className="font-normal">{post.title}</h3>
                <time className="text-[var(--secondary)] text-sm">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
                <span className="text-[var(--secondary)] text-sm flex items-center gap-1">
                  <Arrow className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/writing"
            className="text-[var(--secondary)] hover:text-white transition-colors"
          >
            View All Posts →
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-medium mb-6">Projects</h2>
        <div className="space-y-0">
          {projects.map((project: any) => (
            <div
              
              key={project._id}
              className="block border-t border-gray-200/10"
            >
              <div className="grid grid-cols-[1fr,auto,auto,auto] items-baseline gap-8 py-6 hover:bg-white/5 transition-colors px-4 -mx-4">
                <h3 className="font-normal">{project.title}</h3>
                <div className="flex gap-2">
                  {project.technologies?.slice(0, 2).map((tech: string) => (
                    <span key={tech} className="text-[var(--secondary)] text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--secondary)] text-sm hover:text-white transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--secondary)] text-sm hover:text-white transition-colors"
                >
                  Live →
                </a>
              )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="text-[var(--secondary)] hover:text-white transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}
