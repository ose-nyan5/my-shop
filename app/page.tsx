"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Slatt tee",
    images: [
      "/newwtee.png",
      "/black-look1.jpg",
      "/black-look2.jpg",
      "/black-look3.jpg",

    ],
    price: "¥6,600",
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 2000)

  return () => clearTimeout(timer)
}, [])

if (loading) {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold animate-fade-In">
        FUORI MAI DENTRO
      </h1>
    </main>
  )
}

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden animate-fade-In">
      <div className="fixed inset-0 -z-10 bg-black" />

<header className="flex justify-between items-center">

  <button onClick={() => setMenuOpen(true)}>
    <Menu size={36} />
  </button>

  <h1 className="text-3xl font-black">
    FUORI MAI DENTRO
  </h1>

  <Link href="/cart">
    <ShoppingCart size={36} />
  </Link>

</header>

      <section className="flex justify-center pt-36 pb-20">
        <div className="relative w-[420px] h-[320px]">
          
          <a href="/">
           <Image
            src="/newwwwwlogo.png"
            alt="FMD Logo"
            fill
            priority
            className="object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
          />
        </a>

        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="grid grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-white text-black overflow-hidden shadow-2xl hover:-translate-y-2 duration-300"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-1 hover:scale-105 duration-300"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-[20px] font-medium mb-4">
                  {product.name}
                </h2>

                <p className="text-[28px] font-black">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700">
          <div className="py-12 px-6">
            <div className="flex justify-center mb-5">
              <div className="text-5xl mb-5">FMD</div>
            </div>

            <h2 className="text-center text-5xl font-black mb-10">
              Instagram
            </h2>

            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/fuorimaidentro?igsh=a2JmNHk1d3JzZ2xz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black w-full max-w-[420px] py-6 text-center text-3xl font-bold"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-white/70 text-sm pb-10 space-y-3">
        <p>© FMD All Rights Reserved.</p>

        <a
          href="/legal"
          className="block text-gray-500 hover:text-white duration-300"
        >
          特定商取引法に基づく表記
        </a>

        <a
          href="/privacy"
          className="block text-gray-500 hover:text-white duration-300"
        >
          プライバシーポリシー
        </a>
      </footer>
    
    {menuOpen && (
  <div className="fixed inset-0 z-50 flex">

    <div className="w-[80%] max-w-[320px] bg-black/90 backdrop-blur-md h-full p-8 flex flex-col gap-8 text-3xl font-black animate-slideIn">
      <button
        className="text-5xl mb-10"
        onClick={() => setMenuOpen(false)}
      >
        ×
      </button>

      <a
  href="/"
  className="tracking-widest hover:opacity-60 duration-300"
>
  HOME
</a>

<a
  href="/cart"
  className="tracking-widest hover:opacity-60 duration-300"
>
  CART
</a>

<a
  href="/product/1"
  className="tracking-widest hover:opacity-60 duration-300"
>
  SLATT TEE
</a>
    </div>

    <div
      className="flex-1 bg-black/60"
      onClick={() => setMenuOpen(false)}
    />

  </div>
)}
    </main>
  )
}