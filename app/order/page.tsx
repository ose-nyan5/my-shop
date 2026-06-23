"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
export default function OrderPage() {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] =useState("M")
  const [color, setColor] = useState("Black")

  useEffect(() => {
    const savedQuantity = localStorage.getItem("cartQuantity")

    if (savedQuantity) {
      setQuantity(Number(savedQuantity))
    }

    const savedSize = localStorage.getItem("cartSize")

    if (savedSize) {
      setSize(savedSize)
    }

    const savedColor = localStorage.getItem("cartColor")

    if (savedColor) {
      setColor(savedColor)
    }
  }, [])

  const price = 6600
  const total = price * quantity

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <a href="/cart" className="text-gray-400 text-sm hover:text-white duration-300">
        ← BACK TO CART
      </a>

      <h1 className="text-5xl font-black mt-10">ORDER</h1>

      <div className="mt-10 space-y-4">
        <input placeholder="FIRST NAME" className="w-full bg-white text-black p-5 rounded-xl" />
        <input placeholder="LAST NAME" className="w-full bg-white text-black p-5 rounded-xl" />
        <input placeholder="EMAIL" className="w-full bg-white text-black p-5 rounded-xl" />
        <input placeholder="PHONE" className="w-full bg-white text-black p-5 rounded-xl" />
        <input placeholder="ADDRESS" className="w-full bg-white text-black p-5 rounded-xl" />
        <input placeholder="CITY" className="w-full bg-white text-black p-5 rounded-xl" />
        <input placeholder="ZIP CODE" className="w-full bg-white text-black p-5 rounded-xl" />
      </div>

      <div className="mt-12 bg-white text-black rounded-2xl p-6">
        <h2 className="text-2xl font-black mb-6">
          ORDER SUMMARY
        </h2>

        <div className="flex items-center justify-between border-b border-black/20 pb-4">
          <div className="flex items-center gap-4">

            <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={color === "Black" ? "/newwtee.png" : "/newwhitetee.png"}
                alt="Slatt tee"
                fill
                className="object-contain p-1"
              />
            </div>

            <div>
              <p className="font-bold">
                Slatt tee
              </p>

              <p className="text-sm text-gray-500">
                Size {size}
              </p>

              <p className="text-sm text-gray-500">
                Color {color}
              </p>
            </div>

          </div>

          <p className="font-bold">
            ¥6,600
          </p>
        </div>
        
        <div className="mt-6 space-y-3">

          <div className="flex justify-between">
            <p className="text-gray-500">Quantity</p>
            <p>{quantity}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p>¥{total.toLocaleString()}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Shipping</p>
            <p>Free</p>
          </div>

        </div>

        <div className="flex justify-between mt-6 pt-4 border-t border-black/20 text-2xl font-black">
          <p>TOTAL</p>
          <p>¥{total.toLocaleString()}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          const savedSize = localStorage.getItem("cartSize") || size
          const savedColor = localStorage.getItem("cartColor") || color
          const savedQuantity =
            localStorage.getItem("cartQuantity") || String(quantity)

          window.location.href =
            `/checkout?size=${savedSize}&color=${savedColor}&quantity=${savedQuantity}`
        }}
        className="block w-full bg-white text-black py-5 rounded-2xl text-xl font-black mt-8 text-center hover:opacity-80 duration-300"
      >
        GO TO PAYMENT
      </button>
    </main>
  )
}