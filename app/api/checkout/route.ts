import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    payment_method_types: ["card", "paypay" as any],

    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: {
            name: "Slatt tee",
          },
          unit_amount: 6600,
        },
        quantity: 1,
      },
    ],
    success_url: "https://my-shop-gamma-sepia.vercel.app/success",
    cancel_url: "https://my-shop-gamma-sepia.vercel.app/cart",
  })

  return Response.json({ url: session.url })
}