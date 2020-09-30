import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { name, price, img, seller, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">this product:{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>price : {price}</p>
                <p>stock : {stock}</p>
                <button
                onClick={()=>props.handleAddProduct(props.product)} 
                className='main-btn'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                     add to cart
                     </button>
            </div>
        </div>
    );
};

export default Product;