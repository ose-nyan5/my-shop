import Stripe from "stripe"
import { redirect } from "next/navigation"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{
    size?: string
    color?: string
    quantity?: string
  }>
}) {
  const params = await searchParams

  const size = params.size || "M"
  const color = params.color || "Black"
  const quantity = Number(params.quantity || 1)

  const customer = await stripe.customers.create()

  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    customer: customer.id,

    payment_method_types: [
      "card",
      "paypay" as any,
      "customer_balance",
    ],

    payment_method_options: {
      customer_balance: {
        funding_type: "bank_transfer",
        bank_transfer: {
          type: "jp_bank_transfer",
        },
      },
    },

    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: {
            name: "Slatt tee",
            description: `Color: ${color} / Size: ${size}`,
          },
          unit_amount: 6600,
        },
        quantity,
      },
    ],

    success_url:
      "https://my-shop-gamma-sepia.vercel.app/success",

    cancel_url:
      "https://my-shop-gamma-sepia.vercel.app/cart",
  })

  redirect(session.url!)
}