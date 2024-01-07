import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useMenuinfo from "../utils/useMenuinfo";


const ResMenu = () => {


  const { id } = useParams();

 const resinfo=useMenuinfo(id);

 
if(resinfo.length==0)
{
    return <Shimmer/>
}
else{
    const {name,avgRating,deliveryTime,areaName,cloudinaryImageId}=resinfo;
  

  return (
    <>
    <div className="Res-Menu">
        <div className="Res-info">
            <div className="Res-About">
                <div>
                <h3>{name}</h3>
            <h4 >{areaName}</h4>
                </div>
            <div>
            <h3>{avgRating}  <i class="fa-solid fa-star" style={{"color": "#55e01a"}}></i></h3>
            </div>
            
            </div>
            <div className="Res-img">
                <img className="Menu-img card-img"src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>

            </div>
            
    
        </div>
        <div className="Menu-details">
                <h4>
                    helloworld
                </h4>
        </div>
   
    </div>
    </>
    
  );
}};

export default ResMenu;
