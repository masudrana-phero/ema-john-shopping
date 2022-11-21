import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, price, ratings } = product;

    return (
        <div className='card w-60 m-3 mb-10 border-2 h-98 p-0 border-stone-400 rounded'>

            <img className='p-2 rounded' src={img} alt="Shoes" />

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price : ${price}</p>
                <p>Rating : {ratings}</p>

                <div>
                    <button onClick={() => handleAddToCart(product)} className="btn rounded mt-5 justify-end">
                        Add to Cart
                        <FontAwesomeIcon className='ml-2' icon={faShoppingCart} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Product;