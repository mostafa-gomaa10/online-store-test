import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../store-logo.gif'
function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-md navbar-light bg-dark p-0">
                <div className="container">
                    <Link className="navbar-brand p-0" to="/">
                        <img src={logo} alt="logo" className='w-50' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link text-white fs-4" to="/add-product">Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fs-4" to="/all-products">All Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar