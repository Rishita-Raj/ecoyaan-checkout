"use client"

import { useForm } from "react-hook-form"
import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"

export default function AddressForm() {

  const { setAddress } = useCheckout()
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    setAddress(data)
    router.push("/payment")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-lg"
    >

      <input
        placeholder="Full Name"
        {...register("name", { required: true })}
        className="input"
      />

      <input
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="input"
      />

      <input
        placeholder="Phone"
        {...register("phone", { required: true, minLength: 10, maxLength: 10 })}
        className="input"
      />

      <input
        placeholder="PIN Code"
        {...register("pincode", { required: true })}
        className="input"
      />

      <input
        placeholder="City"
        {...register("city", { required: true })}
        className="input"
      />

      <input
        placeholder="State"
        {...register("state", { required: true })}
        className="input"
      />

      <button className="bg-green-600 text-white px-6 py-3 rounded">
        Continue to Payment
      </button>

    </form>
  )
}