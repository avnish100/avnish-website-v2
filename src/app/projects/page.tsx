import { getProjects } from '@/sanity/lib/client'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-medium mb-12">Projects</h1>
      
      <div className="space-y-0">
        {projects.map((project: any) => (
          <div
            key={project._id}
            className="block border-t border-gray-200/10"
          >
            <div className="grid grid-cols-[1fr,auto,auto,auto] items-baseline gap-8 py-6 hover:bg-white/5 transition-colors px-4 -mx-4">
              <div>
                <h2 className="font-normal">{project.title}</h2>
                <p className="text-[var(--secondary)] text-sm mt-2">{project.description}</p>
              </div>
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
    </main>
  )
} 