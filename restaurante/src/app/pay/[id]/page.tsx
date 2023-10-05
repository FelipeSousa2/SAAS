"use client";
import React, { useEffect } from "react";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = React.useState("");

  const { id } = params;

  useEffect(() => {
    const makeRequst = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequst();
  }, [id]);

  const options:StripeElementsOptions={
    clientSecret,
    appearance:{
        theme:"stripe"
    }
  }

  return (
    <div>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )}
    </div>
  )
};

export default PayPage;
