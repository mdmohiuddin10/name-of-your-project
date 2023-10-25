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



const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
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
            element: <ProductDetail></ProductDetail>,
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
            element: <AddProduct></AddProduct>
        },
        {
            path: '/updateForm/:id',
            element: <UpdateForm></UpdateForm>,
            loader: ({params}) => fetch(`https://assignment-10-r7m717nv8-mdmohiuddin10.vercel.app/addProduct/${params.id}`)
        },
        {
            path: '/myCart',
            element: <MyCart />,
            loader: () => fetch('https://assignment-10-r7m717nv8-mdmohiuddin10.vercel.app/addToCart')
                   
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