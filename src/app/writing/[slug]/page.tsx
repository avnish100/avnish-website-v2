import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import type { Metadata } from "next";

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      mainImage,
      publishedAt,
      content,
      excerpt
    }`,
    { slug }
  )
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <time className="text-[var(--secondary)] block mb-8">
        {new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>

      {post.mainImage && (
        <div className="mb-8">
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.title}
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
      )}

      <div className="prose prose-lg prose-invert max-w-none">
        <PortableText value={post.content} />
      </div>
    </article>
  )
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch your post data here
  const post = await getPost(params.slug);

  return {
    title: `${post.title} - Avnish Jha`,
    description: post.excerpt || post.description,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Avnish Jha"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.description,
    },
  }
} 