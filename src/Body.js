import React from "react";
import Filter from "./Filter";
import Rescard from "./Res-card";
import Restaurants from "../utils/data";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="filters">
          <Filter />
        </div>
        <div className="Card-Container">
        
          {Restaurants.map((rescard)=>{return <Rescard key={rescard.info.id} data={rescard}/>})}
        
        
       
          
      </div>
      </div>
    </>
  );
};

export default Body;
