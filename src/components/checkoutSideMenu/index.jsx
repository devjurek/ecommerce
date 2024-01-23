import { XMarkIcon } from '@heroicons/react/24/solid'

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

            <div className=" container px-6  overflow-y-scroll ">
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

            <div className="px-6"> 
                <p className="flex  justify-between items-center">
                    <span className="font-bold ">Total:</span>
                    <span className="font-bold text-2xl text-green-500">${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu