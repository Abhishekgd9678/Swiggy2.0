import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import Category from "./Category";

const ResMenu = () => {
  const [resinfo, setresinfo] = useState({});
  const [menu, setmenu] = useState([]);

  const { id } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.28475216724439&lng=76.64010163396597&restaurantId=${id}`
    );
    const j = await data.json();
    const respart = j?.data?.cards[0]?.card?.card?.info;
    

    setresinfo(respart);
    
 
    const x  =j.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(card=>card.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    setmenu(x);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

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
            <div className="mx-3  Res-About">
                <div>
                <h3 className="font-extrabold text-2xl font-serif">{name}</h3>
            <h4  className="text-xl">{areaName}</h4>
                </div>
            <div>
            <h3 className="text-2xl font-bold">{avgRating}  <i class="fa-solid fa-star" style={{"color": "#55e01a"}}></i></h3>
            </div>
            
            </div>
            <div className="Res-img">
                <img className="Menu-img "src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>

            </div>
            
       
        </div>
        <div className="mt-28 w-2/4  Menu-details  ">
                {menu.map(cat=><Category data={cat} />)}
        </div>
   
    </div>
    </>
    
  );
}};

export default ResMenu;
