import {useRoutes, BrowserRouter} from "react-router-dom"
import Home from '../home'
import MyAccount from '../myaccount'
import MyOrder from '../myorder'
import MyOrders from '../myorders'
import NotFound from '../notfound'
import SignIn from '../signin'
import Navbar from "../../components/navbar"
import { ShoppingCartProvider } from "../../context"
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:"/home",element: <Home/>},
    {path:"/my-account",element: <MyAccount/>},
    {path:"/my-order",element: <MyOrder/>},
    {path:"/my-orders",element: <MyOrders/>},
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
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
