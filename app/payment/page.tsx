"use client"

import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"
import CheckoutSteps from "@/components/CheckoutSteps"
import CheckoutFooter from "@/components/CheckoutFooter"

export default function PaymentPage() {

  const router = useRouter()

  const { addresses, selectedAddressIndex } = useCheckout()

const selectedAddress =
  selectedAddressIndex !== null
    ? addresses[selectedAddressIndex]
    : null

 

  if (!selectedAddress) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <CheckoutSteps />
        <p className="text-lg mt-6">No address found</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 pb-24 space-y-6">

      <CheckoutSteps />

      <h1 className="text-2xl font-bold">
        Confirm Order
      </h1>

      <div className="border p-4 rounded-lg">

        <h2 className="font-semibold mb-2">
          Shipping Address
        </h2>

        <p>{selectedAddress.name}</p>
        <p>{selectedAddress.email}</p>
        <p>{selectedAddress.phone}</p>
        <p>
          {selectedAddress.city}, {selectedAddress.state}
        </p>
        <p>{selectedAddress.pincode}</p>

      </div>

      <CheckoutFooter
        back="/checkout"
        next="/success"
        nextLabel="Pay Securely"
      />

    </div>
  )
}