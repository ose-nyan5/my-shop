"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProductPage() {
  const [size, setSize] = useState("M")

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 relative z-0">
      
      <style jsx>{`
        * {
          pointer-events: auto !important;
        }
      `}</style>
      
      <a href="/" className="text-gray-400 text-sm">
        ← BACK
      </a>

      <div className="bg-white mt-10 p-6 relative z-0 pointer-events-none">
        <Image
          src="/newwtee.png"
          alt="Slatt tee"
          width={600}
          height={600}
          className="w-full h-auto pointer-events-none"
        />
      </div>

      <h1 className="text-3xl font-bold mt-8">Slatt tee</h1>

      <p className="text-2xl font-bold mt-4">¥6,600</p>

      <p className="text-gray-400 mt-6">
        FUORI MAI DENTRO original tee.
      </p>

     <button
       type="button"
       onClick={() => {
         window.location.href = "/cart?add=1"
       }}
       className="w-full bg-white text-black py-4 mt-10 font-bold text-lg hover:opacity-80 duration-300"
     >
       ADD TO CART
     </button>
    </main>
  )
}