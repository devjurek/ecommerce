import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"


import {NavLink } from "react-router-dom"
import { useContext } from "react"
import {ShoppingCartContext} from "../../context"



const Navbar = () => {
  const context = useContext (ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

    return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 ">
        <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg  ">
            <NavLink 
            to="/">
                <span className="text-green-500">Not.</span>Shopi
            </NavLink>
            </li>
            <li>
            <NavLink 
            to="/"
            onClick={() => context.setSearchByCategory()}
            className= {({ isActive }) =>
              isActive ? activeStyle : undefined}>
                All
            </NavLink>
            </li>
            <li>
            <NavLink 
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                Clothes
            </NavLink>
            </li>
            <li>
            <NavLink 
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                Electronics
            </NavLink>
            </li>
            <li>
            <NavLink 
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furnitures")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                Furnitures
            </NavLink>
            </li>
            <li>
            <NavLink 
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                Toys
            </NavLink>
            </li>
            <li>
            <NavLink 
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                Others
            </NavLink>
            </li>

            <li className="flex items-center gap-3">
              <div className="relative">
                <input type="text" 
                placeholder="Search Product in Not.Shopi" 
                
                className=" rounded-lg border border-green-500 w-80 p-2 mb-0 focus:outline-none pl-3"
                onChange={(event) => context.setSearchByTitle(event.target.value)} > 
                </input>
              <MagnifyingGlassIcon className="h-6 w-6 absolute right-2 top-2 text-gray-500 pr-1"/> 
              </div>
            </li>
            
        </ul>

        <ul className="flex items-center gap-3">
            <li className="text-black/60">
            devjorgepinto@gmail.com
            </li>
            <li>
            <NavLink 
            to="/my-orders"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                My Orders
            </NavLink>
            </li>
            <li>
            <NavLink 
            to="/my-account"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                My Account
            </NavLink>
            </li>
            <li>
            <NavLink 
            to="/sign-in"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                Sign in
            </NavLink>
            </li>
            <li className="flex items-center">
            <ShoppingBagIcon className="h-6 w-6"/> 
            <div>
            {context.cartProducts.length}
            </div>
            
            </li>

        </ul>
    </nav>
    )
}

export default Navbar