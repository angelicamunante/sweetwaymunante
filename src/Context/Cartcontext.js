import { useState, useContext, createContext } from 'react';

export const CartContext = createContext( [] );

export const useCartContext = () => useContext( CartContext );

const CartProvider = ( { children } ) => {

    const [ cart, setCart] = useState( [] );

    const addItem = ( item, cantidad ) => {
        if( isInCart( item.id ) ){
            alert('Ya está en el carrito')
            // setCart( cart.map( menu => {
            // return menu.id === item.id ? { ...menu, cantidad: menu.cantidad + cantidad } : menu
        // } )); 
        } else {
            setCart( [...cart, { ...item, cantidad } ] )
        }
        console.log('cart', [...cart, {...item, cantidad}])
    };

    const clearCart = () => setCart( [] );

    const isInCart = ( id ) => cart.some( menu => menu.id === id );

    const removeItem = ( id ) => setCart( cart.filter( menu => menu.id !== id ) );

    return (
        <CartContext.Provider value= { {
            clearCart,
            isInCart,
            removeItem,
            addItem
        } }>
            { children }
        </CartContext.Provider>


    )
};

export default CartProvider;