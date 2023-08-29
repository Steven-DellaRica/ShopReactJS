import './ProductList.css'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductsArray } from './ContextProducts';
import CartWidget from './CartWidget';

export default function ProductList() {

    const { productsArr, addToCart, cartProductsArr, isCartOn } = useContext(ProductsArray);

    let totalPrice = 0;

    const [filter, setFilter] = useState(null);
    const [currentArray, setCurrentArray] = useState([]);

    const handleFilters = (e) =>{
        e.preventDefault();
        console.log(e.target.filter.value);
        setFilter(e.target.filter.value);
    }

    const filteredArray = productsArr.filter(product => product.title.includes(filter));


    useEffect(() => {
        if(filter === null){
            setCurrentArray(productsArr);
        } else {
            setCurrentArray(filteredArray);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    cartProductsArr.map(product => totalPrice = product.price + totalPrice);

    return (
        <section className="py-5">

            <form onSubmit={e => handleFilters(e)}>
                <label>Article to find</label>
                <input id='filter' />
                <button type='submit'>Rechercher</button>
            </form>

            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {currentArray.map((product) =>

                        <div key={product.id} className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top imgProductList" src={product.image} alt="..." />
                                <div className="p-1 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><button value={product.id} onClick={addToCart} className="btn btn-primary mt-auto" >Cart</button></div>
                                </div>
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder"> {product.title}</h5>
                                        {/* <!-- Product price--> */}
                                        <p>{product.price} €</p>
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link key={product.id} to={`/${product.id}`}><button value={product.id} className="btn btn-outline-dark mt-auto" >Voir plus</button></Link></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isCartOn ?
            <aside>                 
                <div><CartWidget />
                    <p className='text-black fs-6'>Total price : {totalPrice}</p>
                </div>                
            </aside> : <div></div>}

        </section>
    )
}
