import Stripe from "stripe"
import { env } from "../../env.mjs"

let stripeClient: Stripe | null = null

export function getStripeClient() {
  if (!env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set")
  }

  if (!stripeClient) {
    stripeClient = new Stripe(env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-11-17.clover",
    })
  }

  return stripeClient
}
