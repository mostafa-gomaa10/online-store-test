import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backendURL } from '../backendpoint';
import Loading from './Loading';
import { Link } from 'react-router-dom'


function oneProductPage() {
    const params = useParams();
    const [productInfo, setProductInfo] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(backendURL + 'products/' + params.id)
            .then((result) => {
                setLoading(false)
                setProductInfo(result.data.result);
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.message);
                setError(err.message);

            })
    }, [])

    if (error) return (
        <>
            <div className="alert alert-danger" role="alert">
                <p>Error while fetching product</p>
                <p>{error}</p>
            </div>
        </>
    )

    if (loading) return <Loading />

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-3 mt-4 w-100'>
            <div className="card p-3 w-50 mx-auto" >
                <img className="card-img-top img-fluid" src={productInfo.image} alt="Card image cap"
                    style={{ height: '300px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{productInfo.name}</h5>
                    <p className="card-text">{productInfo.desc}</p>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">price/unit: ${productInfo.price}</li>
                    <li className="list-group-item">quantity:  {productInfo.qty} units</li>
                </ul>
                <button className="btn btn-dark mt-3">
                    <Link to={`/product/update/${productInfo._id}`} className="text-white text-decoration-none">Update Product</Link>
                </button>
            </div>
        </div>
    )
}

export default oneProductPage