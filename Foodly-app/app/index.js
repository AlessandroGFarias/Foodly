import CartProvider from '../src/contexts'
import Home from '../src/pages/Home'

export default function Index() {
    return (
        <CartProvider>
            <Home/>
        </CartProvider>
    )
}