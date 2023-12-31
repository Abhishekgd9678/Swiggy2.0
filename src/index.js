import React from "react";
import  ReactDOM  from "react-dom/client";
import  Header  from "./Header";
import Body from "./Body";
import Footer from "./Footer";



const App=()=>
{
    return(
        <>
       <Header/>
       <Body/>
       <Footer/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);