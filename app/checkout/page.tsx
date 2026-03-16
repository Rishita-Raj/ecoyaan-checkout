import CheckoutFooter from "@/components/CheckoutFooter"
import CheckoutSteps from "@/components/CheckoutSteps"
import AddressForm from "@/components/AddressForm"

export default function CheckoutPage() {

  return (
    <div className="max-w-4xl mx-auto p-6 pb-24">

      <CheckoutSteps />

      <h1 className="text-2xl font-bold mb-6">
        Shipping Address
      </h1>

      <AddressForm />

      <CheckoutFooter
        back="/"
        next="/payment"
        nextLabel="Continue to Payment"
      />

    </div>
  )
}