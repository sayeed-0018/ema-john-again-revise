import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd)=> total+prd.price * prd.quantity ,0) ;
    let shipping = 0;
    if (total >35){
        shipping =0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }
    const tax = (total /10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number (precision);
    }
    return (
        <div>
            <h1>This is cart</h1>
            <h5>Order Summary: {cart.length}</h5>
            <p>product price : {formatNumber(total)}</p>
            <p>shipping: {shipping}</p>
           <p>Tax + Vat : {tax}</p>
            <p>total price: {grandTotal}</p>
            <br/>
            {
            props.children
            }
        </div>
    );
};

export default Cart;