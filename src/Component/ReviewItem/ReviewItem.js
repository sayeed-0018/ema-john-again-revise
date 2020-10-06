import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle={
        borderBottom:"1px solid tomato", 
        paddingBottom:"5px",
        marginBottom:"5px",
        marginLeft:"200px"
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4>This is {name}</h4>
            <h6>Quantity: {quantity}</h6>
            <p><small>price: ${price}</small></p>
            <br/>
            <button onClick={()=> props.handleRemoveProduct(key)} className="main-btn">Remove Item</button>
        </div>
    );
};

export default ReviewItem;