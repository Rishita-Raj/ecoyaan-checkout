"use client"

import { useRouter } from "next/navigation"
import { useCheckout } from "@/context/CheckoutContext"

export default function CheckoutFooter({
  back,
  next,
  nextLabel = "Next Step"
}: {
  back?: string
  next?: string
  nextLabel?: string
}) {

  const router = useRouter()
  const { addresses } = useCheckout()

  const canProceed = addresses.length > 0

  return (
   <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t p-4 shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between">

        {back ? (
          <button
            onClick={() => router.push(back)}
            className="px-5 py-2 border rounded hover:bg-gray-100"
          >
            Back
          </button>
        ) : <div />}

        {next && (
          <button
            onClick={() => router.push(next)}
            disabled={!canProceed}
            className={`px-6 py-2 rounded text-white transition 
              ${canProceed
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            {nextLabel}
          </button>
        )}

      </div>

    </div>
  )
}