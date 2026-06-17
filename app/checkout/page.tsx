import Stripe from "stripe"
import { redirect } from "next/navigation"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ size?: string; quantity?: string }>
}) {
  const params = await searchParams

  const size = params.size || "M"
  const quantity = Number(params.quantity || 1)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: {
            name: `Slatt tee / Size ${size}`,
          },
          unit_amount: 6600,
        },
        quantity: quantity,
      },
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cart",
  })

  redirect(session.url!)
}