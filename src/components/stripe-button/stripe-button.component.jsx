import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price}) =>  {
    const priceForStripe = price * 100;
    const publishableKey  = 'pk_test_51HjNITG4H76vKOxYV5b6QEwAYK6GsTgh0N2DTQiShFjyeCxau3GIsDdHdAisPOSSetUXwvmOpOc5NM76N207fgpX00cMhgJHRg';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
           label = 'Pay Now'
           name = 'Crown Clothing'
           billingAddress
           shippingAddress
           image = ''
           description = { `Your total is $${price}`}
           amount = {priceForStripe}
           panelLabel = 'Pay Now'
           tokem = {onToken}
           stripeKey = { publishableKey }
        />
    );
};

export default StripeCheckoutButton;