import { NextResponse } from "next/server"

export async function GET() {

  return NextResponse.json({
    cartItems: [
      {
        product_id: 101,
        product_name: "Bamboo Toothbrush (Pack of 4)",
        product_price: 299,
        quantity: 2,
        image: "https://thumbs.dreamstime.com/b/close-up-bamboo-toothbrush-soft-bristles-transparent-background-png-object-342180462.jpg"
      },
      {
        product_id: 102,
        product_name: "Reusable Cotton Produce Bags",
        product_price: 450,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6y0BOivXSXdUxb3AovRyECNv4isDmnwsUg&s"
      }
    ],
    shipping_fee: 50,
    discount_applied: 0
  })

}