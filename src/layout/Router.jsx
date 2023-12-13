import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import BrandProduct from "../pages/Home/BrandProduct";
import Brandname from "../pages/Home/Brandname";
import ProductDetail from "../pages/Home/ProductDetail";
import Register from "../pages/Register/Register";
import UpdateForm from "../pages/UpdateProduct/UpdateForm";
import Mobile from "../pages/Home/Mobile/Mobile";
import Laptop from "../pages/Home/Laptop/Laptop";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import WishCart from "../pages/WishCart/WishCart";



const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path: '/brandName',
            element: <Brandname></Brandname>,
            loader: () => fetch('/data.json')
        },
        {
            path: '/brandName/:brandName',
            element: <BrandProduct />,
            loader: () => fetch('https://assignment-10-r7m717nv8-mdmohiuddin10.vercel.app/addProduct')

        },
        {
            path: '/productDetail/:id',
            element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
            loader: () => fetch('https://assignment-10-r7m717nv8-mdmohiuddin10.vercel.app/addProduct')

        },
        {
            path: '/mobile',
            element: <Mobile></Mobile>,
        },
        {
            path: '/laptop',
            element: <Laptop></Laptop>
        },
        {
            path: '/watch',
            element: <Laptop></Laptop>
        },

        {
            path: '/addProduct',
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path: '/updateForm/:id',
            element: <PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>,
            loader: ({params}) => fetch(`https://assignment-10-r7m717nv8-mdmohiuddin10.vercel.app/addProduct/${params.id}`)
        },
        {
            path: '/myCart',
            element: <PrivateRoute><MyCart /></PrivateRoute>,
            loader: () => fetch('https://assignment-10-r7m717nv8-mdmohiuddin10.vercel.app/addToCart')
                   
        },
        {
            path: '/wishCart',
            element: <PrivateRoute><WishCart></WishCart></PrivateRoute>,
            loader: () => fetch('http://localhost:5001/wishCart')
                   
        },
        
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
    ]
}])

export default router;