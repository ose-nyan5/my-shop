"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function CartPage() {
  const [quantity, setQuantity] = useState(1)
  const [showItem, setShowItem] = useState(false)
  const [size, setSize] = useState("M")
  const [color, setColor] = useState("Black")

useEffect(() => {
  const params = new URLSearchParams(window.location.search)

  const savedSize = localStorage.getItem("cartSize")

  if (savedSize) {
    setSize(savedSize)
  }

  const savedColor = localStorage.getItem("cartColor")

  if (savedColor) {
    setColor(savedColor)
  }

  if (params.get("add") === "1") {
    localStorage.setItem(
      "cartItem",
      JSON.stringify({
        name: "Slatt tee",
        price: 6600,
        image: "/newwtee.png",
        size: "M",
        quantity: 1,
      })
    )

    localStorage.removeItem("cartRemoved")
    setShowItem(true)
    return
  }

  const savedItem = localStorage.getItem("cartItem")
  const removed = localStorage.getItem("cartRemoved")

  if (savedItem && removed !== "true") {
    setShowItem(true)
  }
}, [])

  const price = 6600
  const total = price * quantity

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <a href="/" className="text-gray-400 text-sm">
        ← CONTINUE SHOPPING
      </a>

      <h1 className="text-5xl font-black mt-10 mb-10">CART</h1>

      {showItem ? (
        <>
          <div className="bg-white text-black rounded-2xl p-5 flex gap-5 shadow-2xl">
            <div className="relative w-32 h-32 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={color === "Black" ? "/nnwwtee.png" : "/newwhitetee.png"}
                alt="Slatt tee"
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-2xl font-black">Slatt tee</h2>
                <p className="text-gray-500 mt-2">Size {size}</p>
                <p className="text-gray-500">Color {color}</p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center border border-black rounded-full overflow-hidden">
                  <button
                    onClick={() => {
                      const newQuantity = Math.max(1, quantity - 1)
                      setQuantity(newQuantity)
                      localStorage.setItem("cartQuantity", String(newQuantity))
                    }}
                    className="px-4 py-2 text-xl hover:bg-black hover:text-white duration-300"
                  >
                    −
                  </button>

                  <div className="px-5 font-bold">{quantity}</div>

                  <button
                    onClick={() => {
                      const newQuantity = quantity + 1
                      setQuantity(newQuantity)
                      localStorage.setItem("cartQuantity", String(newQuantity))
                    }}
                    className="px-4 py-2 text-xl hover:bg-black hover:text-white duration-300"
                  >
                    +
                  </button>
                </div>

                <p className="text-2xl font-black">
                  ¥{total.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => {
                  localStorage.setItem("cartRemoved", "true")
                  setShowItem(false)
                }}
                className="text-red-500 text-sm"
              >
                REMOVE
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-6">
            <div className="flex justify-between text-2xl font-black">
              <p>TOTAL</p>
              <p>¥{total.toLocaleString()}</p>
            </div>

            <a
              href="/order"
              className="block w-full bg-white text-black py-5 rounded-2xl text-xl font-black mt-8 text-center hover:opacity-80 duration-300"
            >
              CHECKOUT
            </a>
          </div>
        </>
      ) : (
        <p className="text-gray-400 mt-10">
          カートは空です
        </p>
      )}
   
    </main>
  )
  }