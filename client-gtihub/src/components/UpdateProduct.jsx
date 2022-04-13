import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backendURL } from '../backendpoint';
import Loading from './Loading';

function UpdateProduct() {
    const [productForm, setProductForm] = useState({
        name: '',
        qty: '',
        price: '',
        desc: '',
        image: '',
    });

    const params = useParams();
    const [productInfo, setProductInfo] = useState({});
    const [formError, setFormError] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const imgInput = useRef();

    useEffect(() => {
        setLoading(true)
        axios.get(backendURL + 'products/' + params.id)
            .then((result) => {
                setLoading(false)
                console.log(result.data.result);
                setProductInfo(result.data.result);
                setProductForm(result.data.result);
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


    const handleSubmit = (e) => {
        e.preventDefault();
        const newProductForm = document.querySelector("#productForm");
        const formData = new FormData(newProductForm)
        formData.append('id', productInfo._id)
        axios.post(backendURL + 'products/update-product', formData)
            .then((result) => {
                console.log(result);
                setProductInfo(result.data.result)
                // setProductInfo({})
                setFormError('');
                setSuccess('updated successfully!!');
            })
            .catch((err) => {
                console.error(err);
                setSuccess('');
                setFormError(err.response.data.error)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setProductForm((prev) => {
            return { ...prev, [name]: value }
        });
    }

    return (
        <div className='container m-auto p-2 mt-3 row align-items-center justify-content-between gx-4'>
            <div className="col-sm-6">
                {productInfo ?

                    <>
                        <h5><span className="fs-6 text-secondary">name: </span>{productInfo.name}</h5>
                        <h5><span className="fs-6 text-secondary">qty: </span>{productInfo.qty}</h5>
                        <h5><span className="fs-6 text-secondary">price: </span>${productInfo.price}</h5>
                        <h5><span className="fs-6 text-secondary">dec: </span>{productInfo.desc}</h5>
                        <div className='p-3' style={{ height: '200px' }}>
                            <img className='img-fluid ' src={productInfo.image} style={{ height: '100%' }} />

                        </div>

                    </>
                    : 'No Product....'
                }
            </div>
            <div className="col-sm-6">
                <h5 className='mb-4'>Update {productForm.name}</h5>
                <form onSubmit={handleSubmit} id="productForm" method="post" encType='multipart/form-data'>
                    <div className="row">
                        <div className="col-12 mt-3">
                            <input required={true} type="text"
                                name="name" className="form-control"
                                placeholder="Product name"
                                value={productForm.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12 mt-3">
                            <input required={true} type="number" name="qty"
                                className="form-control" placeholder="quantity"
                                value={productForm.qty}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12 mt-3">
                            <input required={true} type="number" name="price"
                                className="form-control" placeholder="price"
                                value={productForm.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12 mt-3">
                            <textarea required={true} type="text" name="desc" className="form-control" placeholder="description" style={{ height: '100px', resize: 'none' }}
                                value={productForm.desc}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div>
                            <input ref={imgInput} className="form-control" type="file" name="image" id="productImage" />
                        </div>

                        <div className='mt-4'>
                            <button type="submit" className="btn btn-primary">Update Product</button>
                        </div>
                    </div>
                </form>
                <div className="mt-5"></div>

                {
                    success && <div className="alert alert-success" role="alert">
                        {success}
                    </div>
                }
                {
                    error && <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                }
            </div>

        </div>
    )
}

export default UpdateProduct