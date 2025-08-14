import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name:'Coca Cola 2L',
            price: 10.90,
            icon: require('../contents/img/Coca_Cola_2L.webp')
        },
        {
            id: 2,
            name:'Chocolate Lacta ao Leite',
            price: 6.50,
            icon: require('../contents/img/lacta_ao_leite.jpg')
        },
        {
            id: 3,
            name: 'Salgadinho Doritos 75g',
            price: 15,
            icon: require('../contents/img/Doritos.jpeg')
        },
        {
            id: 4,
            name:"M&M's",
            price: 5.90,
            icon:require('../contents/img/M&Ms.png')
        },
        {
            id: 5,
            name: "Guarana Lata",
            price: 6,
            icon: require('../contents/img/guarana.jpeg')
        }
    ])


    const [listShoppingCart, setlistShoppingCart] = useState([])


    function addProductOnCart( newItem ) {

        let filter = listShoppingCart.findIndex(item => item.id === newItem.id)
 
        if(filter !== -1) {
            setlistShoppingCart(prev => prev.map((item) => 
                item.id === newItem.id ? {...item, amount: item.amount + 1 } : item
            ))
            return;
        } 
        setlistShoppingCart(prev => [...prev, {...newItem, amount: 1}])
        
    }

    function removeProduct( removeItem ) {

        if ( removeItem.amount === 1) {
            setlistShoppingCart(listShoppingCart.filter(item => removeItem.id !== item.id))
            return;
        }

        setlistShoppingCart(prev => prev.map((item) => 
            item.id === removeItem.id ? {...item, amount: item.amount - 1 } : item
        ))
    }

    return (
        <CartContext.Provider value={{listShoppingCart, products, addProductOnCart, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;