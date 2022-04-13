import axios from 'axios';
import React, { useState } from 'react'
import { backendURL } from '../backendpoint';

function AddProduct() {

    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        const productForm = document.querySelector("#productForm");
        e.preventDefault();
        axios.post(backendURL + 'products/add-product', new FormData(productForm))
            .then((result) => {
                console.log(result.data);
                setProduct(result.data);
            })
            .then(() => {
                setSuccess('uploaded successfully!!');
                setError('');
            })
            .catch((err) => {
                console.error(err.toJSON());

                setProduct(null)
                setSuccess('');
                setError(err.response.data.error)
            })
    }

    const handleChange = (e) => {

    }
    return (
        <div className='container w-50 card p-4 mt-3'>
            <h5 className='mb-4'>Create A Product</h5>
            <form onSubmit={handleSubmit} id="productForm" method="post" encType='multipart/form-data'>
                <div className="row">
                    <div className="col-12 mt-3">
                        <input required={true} type="text" name="name" className="form-control" placeholder="Product name" />
                    </div>
                    <div className="col-12 mt-3">
                        <input required={true} type="number" name="qty" className="form-control" placeholder="quantity" />
                    </div>
                    <div className="col-12 mt-3">
                        <input required={true} type="number" name="price" className="form-control" placeholder="price" />
                    </div>
                    <div className="col-12 mt-3">
                        <textarea required={true} type="text" name="desc" className="form-control" placeholder="description" style={{ height: '100px', resize: 'none' }}></textarea>
                    </div>
                </div>
                <div className="row mt-3">
                    <div>
                        <input required className="form-control" type="file" name="image" id="productImage" />
                    </div>

                    <div className='mt-4'>
                        <button type="submit" className="btn btn-primary">Add Product</button>
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
            <div className="mt-5">
                {product ?

                    <>
                        <h5>name:{product.result.name}</h5>
                        <h5>qty:{product.result.qty}</h5>
                        <h5>price:${product.result.price}</h5>
                        <h5>dec:{product.result.desc}</h5>
                        <div style={{ height: '200px' }}>
                            <img className='img-fluid ' src={product.result.image} style={{ height: '100%' }} />

                        </div>

                    </>
                    : 'Upload A New Product'
                }
            </div>
        </div>
    )
}

export default AddProduct