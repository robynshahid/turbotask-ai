import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { PRODUCTS } from "../shared/products";

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27.acacia" as any,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to create a Stripe Checkout Session
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { priceId } = req.body;

      if (!priceId) {
        return res.status(400).json({ error: "Price ID is required" });
      }

      // Find the product details based on the priceId
      let productItem;
      for (const category of Object.values(PRODUCTS)) {
        const item = category.items.find((i) => i.priceId === priceId);
        if (item) {
          productItem = item;
          break;
        }
      }

      if (!productItem) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Create a Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: productItem.name,
              },
              unit_amount: productItem.price,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
        allow_promotion_codes: true,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
