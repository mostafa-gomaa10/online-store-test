import React from 'react'

function OneProduct({ name, qty, price, image, desc }) {
    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className="card" >
                <img className="card-img-top img-fluid" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">price/unit: ${price}</li>
                    <li className="list-group-item">quantity: {qty} units</li>
                </ul>

            </div>
        </div>
    )
}

export default OneProduct