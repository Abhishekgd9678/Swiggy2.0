import React from 'react'
import { useState,useEffect } from 'react';

const useMenuinfo = (id) => {
    const [resinfo, setresinfo] = useState({});
    const fetchdata=async()=>
    {
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.28475216724439&lng=76.64010163396597&restaurantId=${id}`)
        const json=await data.json();
        const respart = json?.data?.cards[0]?.card?.card?.info;
        setresinfo(respart);
    
    
    }
    useEffect(()=>{fetchdata()},[]);
    return resinfo;
}

export default useMenuinfo