import React from "react";
import Filter from "./Filter";
import Rescard from "./Res-card";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="filters">
          <Filter />
        </div>
        <div className="Card-Container">
        
          <Rescard/>
        
        
          <Rescard/>
          <Rescard/>
          <Rescard/>
          <Rescard/>
          <Rescard/>
          <Rescard/>
          
      </div>
      </div>
    </>
  );
};

export default Body;
