import Link from 'next/link'

export default function Project3Page() {
  // Create an array of 30 for rendering the images
  const images = Array.from({ length: 30 })
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-6xl mx-auto">
        <Link href="/" className="mb-8 inline-block text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition font-medium text-base">← Back to Home</Link>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {images.map((_, i) => (
              <div key={i} className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/notice.png"
                  alt={`Notice ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        <Link href="/" className="mt-10 inline-block bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-6 py-2 rounded-lg font-medium shadow hover:bg-zinc-700 dark:hover:bg-zinc-300 transition">Back to Home</Link>
      </div>
    </div>
  )
} 