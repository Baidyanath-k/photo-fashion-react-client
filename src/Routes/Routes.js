import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import CheckOuts from "../Pages/CheckOuts/CheckOuts";
import Details from "../Pages/Details/Details";
import AllService from "../Pages/Home/AllService/AllService";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SeeOrders from "../Pages/SeeOrders/SeeOrders";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";


const { createBrowserRouter } = require("react-router-dom");
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/Login',
                element:<Login></Login>
            },
            {
                path:'/Signup',
                element:<Signup></Signup>
            },
            {
                path:'/Blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/services/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/allservice',
                element:<PrivateRoutes><AllService></AllService></PrivateRoutes>
            },
            {
                path:'/myreviews',
                element:<AddService></AddService>
            },
            {
                path:'/checkouts/:id',
                element:<PrivateRoutes><CheckOuts></CheckOuts></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/checkouts/${params.id}`)
            },
            {
                path:'/orders',
                element:<PrivateRoutes><SeeOrders></SeeOrders></PrivateRoutes>
            }
        ]
    }
])
export default router;