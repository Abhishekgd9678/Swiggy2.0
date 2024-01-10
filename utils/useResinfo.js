import React, { useState ,useEffect} from 'react'

const useResinfo = () => {
    const[res,setres]=useState([]);
  
    const fetchData = async () => {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.2958104&lng=76.6393805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    
        const data = await response.json();
  
        var respart =
          data?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    
        setres(respart);
    
     
    
      };
    
      useEffect(() => {
        fetchData();
      }, []);

      return res
    
}

export default useResinfo