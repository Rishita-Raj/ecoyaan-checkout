import AddressForm from "@/components/AddressForm"
import CheckoutSteps from "@/components/CheckoutSteps"


export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">

      <CheckoutSteps />

      <h1 className="text-2xl font-bold mb-6">
        Shipping Address
      </h1>

      <AddressForm />

    </div>
  )
}