"use client"

import { usePathname } from "next/navigation"

export default function CheckoutSteps() {

  const path = usePathname()

  const steps = [
    { name: "Cart", path: "/" },
    { name: "Address", path: "/checkout" },
    { name: "Payment", path: "/payment" },
    { name: "Success", path: "/success" }
  ]

  return (
    <div className="flex justify-center mb-8">

      {steps.map((step, index) => {

        const active = path === step.path

        return (
          <div key={step.name} className="flex items-center">

            <div
              className={`px-4 py-2 rounded-full text-sm font-medium
              ${active ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              {step.name}
            </div>

            {index !== steps.length - 1 && (
              <div className="w-8 h-[2px] bg-gray-300"></div>
            )}

          </div>
        )
      })}

    </div>
  )
}