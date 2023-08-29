import './ProductList.css'
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsArray } from './ContextProducts';
import CartWidget from './CartWidget'

export default function ProductPage() {

    const { productsArr, isCartOn, cartProductsArr } = useContext(ProductsArray);

    const { id } = useParams();
    const back = useNavigate();

    const product = productsArr.find(product => product.id === parseInt(id));

    let totalPrice = 0;

    cartProductsArr.map(product => totalPrice = product.price + totalPrice);

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt='Chun Li'/>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => back('/')}>Retour</button>
            {isCartOn ?
                <aside>
                    <div><CartWidget />
                        <p className='text-black fs-6'>Total price : {totalPrice}</p>
                    </div>
                </aside> : <div></div>}

        </div>
    )
}
