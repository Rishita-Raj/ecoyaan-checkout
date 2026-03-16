"use client"

import { useForm } from "react-hook-form"
import { useCheckout } from "@/context/CheckoutContext"

export default function AddressForm() {

  const {
    addAddress,
    addresses,
    selectedAddressIndex,
    setSelectedAddressIndex
  } = useCheckout()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data: any) => {
    addAddress(data)
    reset()
  }

  return (
    <div className="space-y-8">

      {/* Address Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg border shadow-sm space-y-4 max-w-xl"
      >

        <h2 className="font-semibold text-lg">
          Add New Address
        </h2>

        <input placeholder="Full Name" {...register("name")} className="input" />
        <input placeholder="Email" {...register("email")} className="input" />
        <input placeholder="Phone" {...register("phone")} className="input" />
        <input placeholder="PIN Code" {...register("pincode")} className="input" />
        <input placeholder="City" {...register("city")} className="input" />
        <input placeholder="State" {...register("state")} className="input" />

        <button className="bg-gray-900 text-white px-5 py-2 rounded hover:bg-black transition">
          Add Address
        </button>

      </form>


      {/* Saved Addresses */}

      {addresses.length > 0 && (

        <div className="space-y-4">

          <h2 className="text-lg font-semibold">
            Saved Addresses
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {addresses.map((addr, i) => {

              const selected = selectedAddressIndex === i

              return (
                <div
                  key={i}
                  onClick={() => setSelectedAddressIndex(i)}
                  className={`cursor-pointer border rounded-lg p-4 transition
                  ${selected
                      ? "border-green-600 bg-green-50"
                      : "hover:shadow-md"
                    }`}
                >

                  <div className="flex justify-between">

                    <div>
                      <p className="font-semibold">{addr.name}</p>
                      <p className="text-sm text-gray-600">
                        {addr.city}, {addr.state}
                      </p>
                      <p>{addr.pincode}</p>
                      <p className="text-sm text-gray-500">{addr.phone}</p>
                    </div>

                    {selected && (
                      <div className="text-green-600 font-bold">
                        ✓
                      </div>
                    )}

                  </div>

                </div>
              )
            })}

          </div>

        </div>
      )}

    </div>
  )
}