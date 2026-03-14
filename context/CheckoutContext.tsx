"use client"

import { createContext, useContext, useState } from "react"
import { CartItem, Address } from "@/types/types"

interface CheckoutContextType {
  cartItems: CartItem[]
  setCartItems: (items: CartItem[]) => void
  address: Address | null
  setAddress: (addr: Address) => void
}

const CheckoutContext = createContext<CheckoutContextType | null>(null)

export function CheckoutProvider({ children }: { children: React.ReactNode }) {

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [address, setAddress] = useState<Address | null>(null)

  return (
    <CheckoutContext.Provider
      value={{ cartItems, setCartItems, address, setAddress }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => {
  const context = useContext(CheckoutContext)
  if (!context) throw new Error("CheckoutContext missing")
  return context
}