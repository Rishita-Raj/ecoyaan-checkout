"use client"

import { usePathname } from "next/navigation"

export default function CheckoutSteps() {

  const pathname = usePathname()

  const steps = [
    { name: "Cart", path: "/" },
    { name: "Address", path: "/checkout" },
    { name: "Payment", path: "/payment" },
    { name: "Success", path: "/success" }
  ]

  const activeIndex = steps.findIndex(step => step.path === pathname)

  return (
    <div className="flex justify-center mb-10">

      <div className="flex items-center gap-3">

        {steps.map((step, index) => {

          const active = index <= activeIndex

          return (
            <div key={step.name} className="flex items-center">

              <div
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${active
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-600"
                }`}
              >
                {step.name}
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`w-8 h-[2px] transition
                  ${active ? "bg-green-600" : "bg-gray-300"}
                  `}
                />
              )}

            </div>
          )
        })}

      </div>

    </div>
  )
}