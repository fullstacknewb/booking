import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import Stripe from "stripe";

export default function Completion(){
    const stripePromise = loadStripe('pk_test_51MGQZcKvteKmpp4jTA4FNhsHfytPSWmvmMkWb0YCFQLDpf0orElksQssk6bGsKyfWOa0r07RBN4QpFcrLnovKe6S009BBu49Ja');

    useEffect(()=>{

        const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret')
        
        stripePromise.then(stripe => {
            const {paymentIntent, error} = stripe.confirmCardPayment(clientSecret, {

            }).then(({paymentIntent, error}) => {
                if(paymentIntent){
                    
                }
            })
        });
    
    }, []);



    return(
        <div className=''>
            <h1>Payment Complete</h1>
        </div>
    )
}   