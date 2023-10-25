// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { loadStripe } from "@stripe/stripe-js";
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MGQZcKvteKmpp4jjlHqCMOom4COHahv4aWBqukIWxLGC5liqXXyE2cTiEQkfTd3m3AQ5dmA5HprgfVFvB3ncS8f00fDAkok2L');

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
export default async function handler(req, res) {
  const {items} = req.body
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: '1000',
    currency: "cad",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  
  res.send(
     {clientSecret : paymentIntent.client_secret},
  );

};