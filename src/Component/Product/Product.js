import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, price, img, seller, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">this product: <Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>price : {price}</p>
                <p>stock : {stock}</p>
                {props.showAddToCart === true && <button
                onClick={()=>props.handleAddProduct(props.product)} 
                className='main-btn'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                     add to cart
                     </button>}
            </div>
        </div>
    );
};

export default Product;