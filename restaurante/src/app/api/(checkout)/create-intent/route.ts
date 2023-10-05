import prisma from "@/utils/connect";
import { NextRequest } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const order = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });

  if (order) {
    const paymentIntent = await stripe.paymentIntent.create({
      amount: 100 * 100,
      currency: "BLR",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    await prisma.order.update({
      where: {
        id: id,
      },
      data: { intent_id: paymentIntent.id },
    });

    return new NextRequest(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  } else {
    return new NextRequest(
      JSON.stringify({ message: "Pedido não encontrado!" }),
      { status: 404 }
    );
  }
};
