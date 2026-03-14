import "./globals.css"
import { CheckoutProvider } from "@/context/CheckoutContext"

export const metadata = {
  title: "Ecoyaan Checkout",
  description: "Frontend Assignment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <header className="border-b p-4 mb-6">
          <div className="max-w-6xl mx-auto font-bold text-xl">
            Ecoyaan Checkout
          </div>
        </header>

        <CheckoutProvider>
          {children}
        </CheckoutProvider>

      </body>
    </html>
  )
}