import { XMarkIcon } from '@heroicons/react/24/solid'

import { Link } from "react-router-dom"
import { ShoppingCartContext } from '../../context'
import { useContext } from 'react'
import { totalPrice } from '../../utilis'
import OrderCard from '../orderCard'
import "./styles.css"

const CheckoutSideMenu = () => {
    const context = useContext (ShoppingCartContext)

const handleDelete = (id) => {
    const filteredProduct = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProduct)
}

const handleCheckout = () => {
    const orderToAdd = {
        data: "01.02.23",
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
}

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl"> My Order</h2>
                <div>
                <XMarkIcon
                className="h-6 w-6 text-black cursor-pointer"
                onClick={() => {
                    context.closeCheckoutSideMenu();}}/>
                </div>
            </div>

            <div className=" container px-6  overflow-y-scroll flex-1 ">
            {context.cartProducts.map(product => (
                <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
                handleDelete={handleDelete}
                />
            ))}
            </div>

            <div className="px-6 mb-6"> 
                <p className="flex  justify-between items-center mb-4">
                    <span className="font-bold ">Total:</span>
                    <span className="font-bold text-2xl text-green-500">${totalPrice(context.cartProducts)}</span>
                </p>

                <Link to="/my-orders/last">
                    <button className= "w-full bg-black py-3 text-white font-bold rounded-lg"
                    onClick={() => handleCheckout()}>Checkout</button>
                </Link>

            </div>
        </aside>
    )
}

export default CheckoutSideMenu