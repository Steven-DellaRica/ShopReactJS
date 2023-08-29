import React, { createContext, useState } from 'react'

export const ProductsArray = createContext();

export const ContextProductsProvider = ({ children }) => {

    const [productsArr, setProductsArr] = useState([{ id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category: "men's clothing", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", rating: { "rate": 3.9, "count": 120 } },
    { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts ", price: 22.3, description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", category: "men's clothing", image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", rating: { rate: 4.1, count: 259 } },
    { id: 3, title: "Mens Cotton Jacket", price: 55.99, description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", category: "men's clothing", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", rating: { rate: 4.7, count: 500 } },
    { id: 4, title: "Mens Casual Slim Fit", price: 15.99, description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", category: "men's clothing", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", rating: { rate: 2.1, count: 430 } },
    { id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", price: 695, description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", category: "jewelery", image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", rating: { rate: 4.6, count: 400 } },
    { id: 6, title: "Solid Gold Petite Micropave ", price: 168, description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.", category: "jewelery", image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", rating: { rate: 3.9, count: 70 } },
    { id: 7, title: "White Gold Plated Princess", price: 9.99, description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...", category: "jewelery", image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", rating: { rate: 3, count: 400 } },
    { id: 8, title: "Pierced Owl Rose Gold Plated Stainless Steel Double", price: 10.99, description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel", category: "jewelery", image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg", rating: { rate: 1.9, count: 100 } }]);

    // Liste de produit dans le site
    // const [productsArr, setProductsArr] = useState([{ id: 1, name: 'Ryu', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugMadHtDWm4YjE173869cJ10RuiQ2yHaBUBnGOiVJytvXa_KI1aYINPgeH0awolNt98A&usqp=CAU', price: 45, tag: 'Coucou', isOnSale: true },
    // { id: 2, name: 'Chun Li', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPA_K_IgyiDr_L_2ffJk44Yj24php9a31CFhMkYkgEptZHqB_IO-zxXGrxEKnlmJLMPQ&usqp=CAU', price: 52, tag: '', isOnSale: false },
    // { id: 3, name: 'Guile', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yRSkQ8fKdA8zRwsuJCnhEgMvrW1Q5xMnUvh3WBsPeh3PnswzH0xUwMJBRCZ2DkbA4vc&usqp=CAU', price: 23, tag: 'Coucou', isOnSale: true },
    // { id: 4, name: 'Zangief', picture: 'https://i.ytimg.com/vi/xmPqSkg4oKM/maxresdefault.jpg', price: 17, isOnSale: false },
    // { id: 5, name: 'Ken', picture: 'https://cdn.vox-cdn.com/thumbor/CYE3hwomjOlqG7I51AX6rF0QPEI=/0x0:1920x960/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg', price: 34, tag: 'Coucou', isOnSale: true },
    // { id: 6, name: 'Jamie', picture: 'https://culturedvultures.com/wp-content/uploads/2022/10/Street-Fighter-6-Jamie.jpg', price: 15, isOnSale: true },
    // { id: 7, name: 'JP', picture: 'https://culturedvultures.com/wp-content/uploads/2022/10/Street-Fighter-6-Jamie.jpg', price: 12, tag: 'Coucou', isOnSale: true },
    // { id: 8, name: 'Marisa', picture: 'https://culturedvultures.com/wp-content/uploads/2022/10/Street-Fighter-6-Jamie.jpg', price: 10, isOnSale: true }]);

    const [saleOn, setSaleOn] = useState(false);

    const changeSale = (e) => {
        if (e.isOnSale) {
            setSaleOn(false);
        } else {
            setSaleOn(true);
        }
    }

    const addToProductList = (e) => {
        setProductsArr([...productsArr, e]);
    }

    //Produit dans le panier
    const [cartProductsArr, setCartProductsArr] = useState([
        { id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack', price: 109.95, image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', quantity: 1 }, 
        { id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts', price: 22.3, image:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', quantity: 2 },
    ]);

    const addToCart = (e) => {
        console.log(e)
        console.log(e.target.value);

        const productToAdd = productsArr.find((product) => product.id === parseInt(e.target.value));

        if (cartProductsArr.length === 0) {
            setCartProductsArr([{ id: 1, title: productToAdd.title, price: productToAdd.price, image: productToAdd.image }]);
        } else {
            const lastElementofArray = cartProductsArr[cartProductsArr.length - 1].id;
            setCartProductsArr([...cartProductsArr, { id: lastElementofArray + 1, name: productToAdd.name, price: productToAdd.price, image: productToAdd.image }]);
        }

        // const productToCompare = cartProductsArr.find((product) => product.id === parseInt(productToAdd.id));

        // console.log(productToAdd);

        // console.log(productToCompare);

        // if(productToCompare === undefined){
        //     setCartProductsArr([...cartProductsArr, {id: lastElementofArray+1, name: productToAdd.name, price: productToAdd.price}]);

        // } else {
        //     console.log()
        //     const newArr = cartProductsArr.map((product) => {if(product.id === productToCompare.id){
        //         return product.quantity +1;
        //     }});
        //     setCartProductsArr(newArr);
        // }
    }

    const deleteFromCart = (e) => {
        console.log(e);
        setCartProductsArr(oldValues => { return oldValues.filter(product => product !== e) });
        // oldValues => { return oldValues.filter(fruit => fruit !== e) }
    }

    //Gestion du Cart
    const [isCartOn, setCartOn] = useState(false);

    const showCart = (e) => {
        e.preventDefault();
        if (isCartOn) {
            setCartOn(false);
        } else {
            setCartOn(true);
        }
    }

    //Datas à envoyer
    const data = {
        productsArr,
        addToProductList,
        saleOn,
        changeSale,
        cartProductsArr,
        addToCart,
        deleteFromCart,
        isCartOn,
        showCart
    }

    return (
        <ProductsArray.Provider value={data}>
            {children}
        </ProductsArray.Provider>
    )
}
