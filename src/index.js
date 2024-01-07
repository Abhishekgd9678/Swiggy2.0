import React from "react";
import  ReactDOM  from "react-dom/client";
import  Header  from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ResMenu from "./ResMenu";




const App=()=>
{
    return(
        <>
       <Header/>
       <Outlet/>
       <Footer/>
        </>
    )
}

const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },{
                path:'/res/:id',
                element:<ResMenu/>
            },
        ],
    },
],

)

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={Approuter}/>);