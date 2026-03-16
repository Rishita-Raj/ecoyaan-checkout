// "use client"

// import { createContext, useContext, useState } from "react"
// import { CartItem, Address } from "@/types/types"

// interface CheckoutContextType {
//   cartItems: CartItem[]
//   setCartItems: (items: CartItem[]) => void
//   address: Address | null
//   setAddress: (addr: Address) => void
// }

// const CheckoutContext = createContext<CheckoutContextType | null>(null)

// export function CheckoutProvider({ children }: { children: React.ReactNode }) {

//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   const [address, setAddress] = useState<Address | null>(null)

//   return (
//     <CheckoutContext.Provider
//       value={{ cartItems, setCartItems, address, setAddress }}
//     >
//       {children}
//     </CheckoutContext.Provider>
//   )
// }

// export const useCheckout = () => {
//   const context = useContext(CheckoutContext)
//   if (!context) throw new Error("CheckoutContext missing")
//   return context
// }

"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { CartItem, Address } from "@/types/types"

interface CheckoutContextType {
  cartItems: CartItem[]
  setCartItems: (items: CartItem[]) => void
  addresses: Address[]
addAddress: (addr: Address) => void
selectedAddressIndex: number | null
setSelectedAddressIndex: (index: number) => void
}

const CheckoutContext = createContext<CheckoutContextType | null>(null)

export function CheckoutProvider({ children }: { children: React.ReactNode }) {

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [addresses, setAddresses] = useState<Address[]>([])
  const [selectedAddressIndex, setSelectedAddressIndex] = useState<number | null>(null)

  // Load addresses from localStorage when app starts
  useEffect(() => {
    const savedAddresses = localStorage.getItem("addresses")
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses))
    }
  }, [])

  // Save addresses whenever they change
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses))
  }, [addresses])

  const addAddress = (addr: Address) => {
    setAddresses((prev) => [...prev, addr])
  }

  return (
    <CheckoutContext.Provider
      value={{
       cartItems,
  setCartItems,
  addresses,
  addAddress,
  selectedAddressIndex,
  setSelectedAddressIndex
      }}
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