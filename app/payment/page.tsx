"use client"

import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"
import CheckoutSteps from "@/components/CheckoutSteps"

export default function PaymentPage() {

  const { address } = useCheckout()
  const router = useRouter()

  const pay = () => {
    router.push("/success")
  }

  if (!address) return <p>No address found</p>

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
          <CheckoutSteps />

      <h1 className="text-2xl font-bold">Confirm Order</h1>

      <div className="border p-4 rounded">

        <h2 className="font-semibold mb-2">
          Shipping Address
        </h2>

        <p>{address.name}</p>
        <p>{address.email}</p>
        <p>{address.phone}</p>
        <p>{address.city}, {address.state}</p>
        <p>{address.pincode}</p>

      </div>

      <button
        onClick={pay}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Pay Securely
      </button>

    </div>
  )
}