import { CartItem } from "@/types/types"

export default function OrderSummary({
  cart,
  shipping
}: {
  cart: CartItem[]
  shipping: number
}) {

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  )

  const total = subtotal + shipping

  return (
    <div className="border rounded-lg p-4 space-y-2">

      <h2 className="font-semibold text-lg">Order Summary</h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>₹{shipping}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

    </div>
  )
}