import { useState, useContext, createContext } from 'react';

export const CartContext = createContext( [] );

export const useCartContext = () => useContext( CartContext );

const CartProvider = ( { children } ) => {

    const [ cart, setCart] = useState( [] );

    const addItem = ( item, quantity ) => {
        console.log(item)
        // console.log(isInCart(item.id))
        if( isInCart( item.id ) ){
            setCart( cart.map( product => {
            return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
        } )); 
        } else {
            setCart( [...cart, { ...item, quantity } ] )
        }
        console.log('cart', [...cart, {...item, quantity}])
    };

    const clearCart = () => setCart( [] );

    const isInCart = ( id ) =>
        {  cart.some( item => item.id === id );}

    const removeItem = ( id ) => setCart( cart.filter( lista => lista.id !== id ) );

    const totalPrice = () => cart.reduce((prev, act) => prev + act.quantity * act.precio, 0 );

    const totalListas = () => cart.reduce((acumulador, listaActual) => acumulador + listaActual.quantity, 0 );

    return (
        <CartContext.Provider value= { {
            clearCart,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalListas,
            cart
        } }>
            { children }
        </CartContext.Provider>


    )
};

export default CartProvider;