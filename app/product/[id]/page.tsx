"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ProductPage() {
  const [size, setSize] = useState("M")

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      
      <Link href="/" className="text-gray-400 text-sm">
        ← BACK
      </Link>

      <div className="mt-8">
        <Image
          src="/tee.png"
          alt="Slatt tee"
          width={600}
          height={600}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-bold">
          Slatt tee
        </h1>

        <p className="text-2xl mt-4 font-semibold">
          ¥6,600
        </p>

        <div className="mt-6">
          <p className="text-gray-400 mb-3">
            SIZE
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setSize("S")}
              className={`w-14 h-14 border ${
                size === "S"
                  ? "bg-white text-black"
                  : "border-gray-600"
              }`}
            >
              S
            </button>

            <button
              type="button"
              onClick={() => setSize("M")}
              className={`w-14 h-14 border ${
                size === "M"
                  ? "bg-white text-black"
                  : "border-gray-600"
              }`}
            >
              M
            </button>
          </div>
        </div>

        <p className="text-gray-400 mt-6 leading-7">
          FUORI MA DENTRO original tee.
          Heavy weight body with slime graphic.
        </p>

        <button
          type="button"
          onClick={() => {
            localStorage.setItem("cartSize", size)
            window.location.href = "/cart?add=1"
          }}
          className="w-full bg-white text-black py-4 mt-10 font-bold text-lg hover:opacity-80 duration-300"
        >
          ADD TO CART
        </button>
      </div>

    </main>
  )
}