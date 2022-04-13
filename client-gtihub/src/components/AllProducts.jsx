import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OneProductCard from './OneProductCard';
import { backendURL } from '../backendpoint';
import Loading from './Loading';

function AllProducts() {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(backendURL + 'products/all-products')
            .then((result) => {
                setLoading(false);
                console.log(result.data.result);
                setAllProducts(result.data.result);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                console.log(err.message);
                setError(err.message)

            })
    }, [])

    if (error) return (
        <>
            <div className="alert alert-danger" role="alert">
                <p>Error while fetching products</p>
                <p>{error}</p>
            </div>
        </>
    )

    if (loading) return <Loading />

    return (
        <div className='p-2'>
            <h1 className='mb-4'>All Products</h1>
            <div className='row'>
                {allProducts.length !== 0
                    ? allProducts.map((product, index) => (
                        <OneProductCard key={index}
                            name={product.name}
                            price={product.price}
                            qty={product.qty}
                            image={product.image}
                            desc={product.desc}
                            productID={product._id}
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