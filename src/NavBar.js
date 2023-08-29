import React, { useContext } from 'react'
import { ProductsArray } from './ContextProducts'

export default function NavBar() {

    const {cartProductsArr, showCart} = useContext(ProductsArray);

    console.log(cartProductsArr);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand text-white" href="#!">Logo E-shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active text-white" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#!">About</a></li>
                    </ul>
                    {/* { Component Cart qui se modifie } */}
                    <form className="d-flex">
                        <button className="btn btn-outline-primary" onClick={showCart}>
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            {/* Modifier le badge en fonction des produits qu'on ajoute*/}
                            <span className="badge bg-primary text-white ms-1 rounded-pill">{cartProductsArr.length}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
