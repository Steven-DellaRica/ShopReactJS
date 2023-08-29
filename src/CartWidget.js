import './CartWidget.css'
import React, { useContext } from 'react'
import { ProductsArray } from './ContextProducts'

export default function Cart() {
    const { cartProductsArr, deleteFromCart } = useContext(ProductsArray);

    return (
        <div>
            {cartProductsArr.map(cartProduct =>
                <div key={cartProduct.id}>
                    <img className='imgCartWidget' src={cartProduct.image} alt='...' />
                    <p className='text-dark'>{cartProduct.title}</p>
                    <p className='text-dark'>{cartProduct.price}</p>
                    <button onClick={() => deleteFromCart(cartProduct)} >Delete</button>
                </div>
            )}
        </div>
    )
}
