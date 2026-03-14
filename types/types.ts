export interface CartItem {
  product_id: number
  product_name: string
  product_price: number
  quantity: number
  image: string
}

export interface Address {
  name: string
  email: string
  phone: string
  pincode: string
  city: string
  state: string
}