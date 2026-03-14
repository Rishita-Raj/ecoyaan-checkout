// import CartItem from "@/components/CartItem"
// import OrderSummary from "@/components/OrderSummary"
// import CheckoutSteps from "@/components/CheckoutSteps"
// import Link from "next/link"

// async function getCart() {

//   const res = await fetch("http://localhost:3000/api/cart", {
//     cache: "no-store"
//   })

//   return res.json()
// }

// export default async function Page() {

//   const data = await getCart()

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <CheckoutSteps />

//       <h1 className="text-2xl font-bold mb-6">Cart</h1>

//       <div className="grid md:grid-cols-3 gap-6">

//         <div className="md:col-span-2 space-y-4">
//           {data.cartItems.map((item: any) => (
//             <CartItem key={item.product_id} item={item} />
//           ))}
//         </div>

//         <div>
//           <OrderSummary
//             cart={data.cartItems}
//             shipping={data.shipping_fee}
//           />

//           <Link href="/checkout">
//             <button className="mt-4 w-full bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
//               Proceed to Checkout
//             </button>
//           </Link>
//         </div>

//       </div>

//     </div>
//   )
// }


import CartItem from "@/components/CartItem"
import OrderSummary from "@/components/OrderSummary"
import CheckoutSteps from "@/components/CheckoutSteps"
import Link from "next/link"
import { headers } from "next/headers"

async function getCart() {

  const headersList = await headers()
  const host = headersList.get("host")
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https"

  const res = await fetch(`${protocol}://${host}/api/cart`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch cart data")
  }

  return res.json()
}

export default async function Page() {

  const data = await getCart()

  return (
    <div className="max-w-6xl mx-auto p-6">

      <CheckoutSteps />

      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="md:col-span-2 space-y-4">
          {data.cartItems.map((item: any) => (
            <CartItem key={item.product_id} item={item} />
          ))}
        </div>

        <div>
          <OrderSummary
            cart={data.cartItems}
            shipping={data.shipping_fee}
          />

          <Link href="/checkout">
            <button className="mt-4 w-full bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}
