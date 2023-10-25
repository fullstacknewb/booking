import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe('pk_test_51MGQZcKvteKmpp4jTA4FNhsHfytPSWmvmMkWb0YCFQLDpf0orElksQssk6bGsKyfWOa0r07RBN4QpFcrLnovKe6S009BBu49Ja');

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'night',
    
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
        {console.log(clientSecret)}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}