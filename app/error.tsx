"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">

      <h2 className="text-xl font-semibold">
        Something went wrong
      </h2>

      <p className="text-gray-500">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Try again
      </button>

    </div>
  )
}