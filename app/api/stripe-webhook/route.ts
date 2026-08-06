import { NextResponse } from "next/server"
import Stripe from "stripe"
import { Resend } from "resend"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    )
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    await resend.emails.send({
      from: "FUORI MAI DENTRO <onboarding@resend.dev>",
      to: "fuorimaidentroofficial@gmail.com",
      subject: "New Order - FUORI MAI DENTRO",
      html: `
        <h1>新しい注文が入りました</h1>
        <p><strong>注文ID:</strong> ${session.id}</p>
        <p><strong>お客様メール:</strong> ${session.customer_details?.email ?? "不明"}</p>
        <p><strong>合計:</strong> ¥${session.amount_total ? session.amount_total.toLocaleString() : "不明"}</p>
      `,
    })
  }

  return NextResponse.json({ received: true })
}