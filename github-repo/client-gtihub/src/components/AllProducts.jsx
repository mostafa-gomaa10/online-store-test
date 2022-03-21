import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OneProduct from './OneProduct';

function AllProducts() {
    const [allProducts, setAllProducts] = useState(null);

    useEffect(() => {
        axios.get('https://online-store-vwn.herokuapp.com/products/all-products')
            .then((result) => {
                console.log(result.data.result);
                setAllProducts(result.data.result);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='p-2'>
            <h1 className='mb-4'>All Products</h1>
            <div className='row'>
                {allProducts
                    ? allProducts.map((product, index) => (
                        <OneProduct key={index}
                            name={product.name}
                            price={product.price}
                            qty={product.qty}
                            image={product.image}
                            desc={product.desc}
                        />
                    ))
                    :
                    <div>
                        <h6>
                            No Products....
                        </h6>
                    </div>
                }
            </div>
        </div>
    )
}

export default AllProducts