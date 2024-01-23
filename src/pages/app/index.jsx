import {useRoutes, BrowserRouter} from "react-router-dom"
import Home from '../home'
import MyAccount from '../myaccount'
import MyOrder from '../myorder'
import MyOrders from '../myorders'
import NotFound from '../notfound'
import SignIn from '../signin'
import Navbar from "../../components/navbar"
import { ShoppingCartProvider } from "../../context"
import CheckoutSideMenu from "../../components/checkoutSideMenu"
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:"/",element: <Home/>},
    {path:"/clothes",element: <Home/>},
    {path:"/electronics",element: <Home/>},
    {path:"/furnitures",element: <Home/>},
    {path:"/toys",element: <Home/>},
    {path:"/others",element: <Home/>},
    {path:"/my-account",element: <MyAccount/>},
    {path:"/my-order",element: <MyOrder/>},
    {path:"/my-orders",element: <MyOrders/>},
    {path:"/my-orders/last",element: <MyOrder/>},
    {path:"/my-orders/:id",element: <MyOrder/>},
    {path:"/*",element: <NotFound/>},
    {path:"/sign-in",element: <SignIn/>},]) 

  return routes
}

const App = () => {
  
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
