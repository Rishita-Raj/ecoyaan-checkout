import { CartItem as Item } from "@/types/types"

export default function CartItem({ item }: { item: Item }) {

  return (
    <div className="flex gap-4 border p-4 rounded-lg hover:shadow-md transition">

      <img src={item.image} className="w-24 h-24 object-cover rounded-lg border" />

      <div className="flex-1">
        <h2 className="font-semibold">{item.product_name}</h2>
        <p>₹{item.product_price}</p>
        <p>Qty: {item.quantity}</p>
      </div>

      <div className="font-bold">
        ₹{item.product_price * item.quantity}
      </div>

    </div>
  )
}