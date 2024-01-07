import React, { useEffect, useState } from 'react'

const useOnlinestatus = () => {
const[status,setstatus]=useState(true);
useEffect(()=>{
    window.addEventListener("online",()=>setstatus(true))
    window.addEventListener("offline",()=>setstatus(false))
},[]);
    return status;


}

export default useOnlinestatus