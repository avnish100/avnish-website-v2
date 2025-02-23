import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'

async function getProject(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      description,
      projectUrl,
      githubUrl,
      technologies,
      content
    }`,
    { slug }
  )
}

export default async function ProjectPage(params:any) {
  const project = await getProject(params.slug)

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      
      {project.mainImage && (
        <div className="mb-8">
          <Image
            src={urlForImage(project.mainImage).url()}
            alt={project.title}
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies?.map((tech: string) => (
          <span
            key={tech}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>{project.description}</p>
      </div>

      <div className="flex gap-4">
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
            View on GitHub
          </a>
        )}
      </div>
    </article>
  )
} 