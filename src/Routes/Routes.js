import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";


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
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])
export default router;