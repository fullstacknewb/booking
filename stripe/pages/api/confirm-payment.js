import { loadStripe } from '@stripe/stripe-js';

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
const stripe = loadStripe('pk_test_51MGQZcKvteKmpp4jTA4FNhsHfytPSWmvmMkWb0YCFQLDpf0orElksQssk6bGsKyfWOa0r07RBN4QpFcrLnovKe6S009BBu49Ja')

// This is your Stripe CLI webhook secret for testing your endpoint locally.
//const endpoint = await stripe.webhookEndpoints.create({
 //   url: 'https://example.com/my/webhook/endpoint',
   // enabled_events: [
     // 'payment_intent.succeeded',
   // ],
 // });