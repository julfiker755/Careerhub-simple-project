import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Home/Home";
import Appliedjobs from "../../Appliedjobs/Appliedjobs";
import Singlepage from "../../Home/Singlepage/Singlepage";
import Blog from "../../Blog/Blog";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:'/applied',
                element:<Appliedjobs></Appliedjobs>
            },{
                path:'/single/:id',
                element:<Singlepage></Singlepage>
            },{
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

export default routes;