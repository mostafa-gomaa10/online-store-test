import React from 'react'
import { Link } from 'react-router-dom'

function OneProduct({ name, qty, price, image, desc, productID }) {
    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className="card p-3" >
                <img className="card-img-top img-fluid" src={image} alt="Card image cap"
                    style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">price/unit: ${price}</li>
                    <li className="list-group-item">quantity: {qty} units</li>
                </ul>
                <button className="btn btn-dark w-50 mt-2">
                    <Link to={`product/${productID}`} className="text-white text-decoration-none">View Product</Link>
                </button>
            </div>
        </div>
    )
}

export default OneProduct