import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 grid grid-cols-3 my-20 ml-10 border-stone-400">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div style={{ backgroundColor: '#FF9900', padding: '0 20px' }} className="text-2xl">
                Order Summery
                <p>Selected Items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;