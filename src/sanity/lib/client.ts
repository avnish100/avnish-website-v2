import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-03-19',
  useCdn: false,
})

export async function getProjects() {
  return client.fetch(
    `*[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      mainImage,
      description,
      projectUrl,
      githubUrl,
      technologies
    }`
  )
}

export async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt
    }`
  )
}

export async function getRecentPosts(limit = 3) {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt
    }`
  )
}

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      content,
      excerpt
    }`,
    { slug }
  )
}


export async function getPhotos() {
  return client.fetch(
    `*[_type == "photo"] | order(dateCreated desc) {
      _id,
      title,
      description,
      dateCreated,
      "imageUrl": image.asset->url
    }`
  )
}
