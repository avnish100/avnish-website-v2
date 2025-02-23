import { getPhotos } from '@/sanity/lib/client'
import Image from 'next/image'

interface Photo {
  _id: string
  title: string
  description?: string
  imageUrl: string
  dateCreated: string
}

export default async function PhotosPage() {
  const photos = await getPhotos()

  const groupedPhotos = photos.reduce((acc: Record<string, Photo[]>, photo: Photo) => {
    const year = new Date(photo.dateCreated).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(photo)
    return acc
  }, {})

  const sortedYears = Object.keys(groupedPhotos).sort((a, b) => Number(b) - Number(a))

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className=" font-medium mb-8">
        I like to take pictures in my free time. The Delhiwalla is a huge inspiration to for capturing the daily experience. Here are some of my favourite pictures i have
      </h1>
      
      {sortedYears.map((year) => (
        <section key={year} className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{year}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupedPhotos[year].map((photo: Photo) => (
              <div
                key={photo._id}
                className="group relative flex flex-col"
              >
                <div className="relative w-full">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-3">
                  <div className="text-sm text-gray-400">{photo.title} -- {new Date(photo.dateCreated).toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric'
                      })}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}