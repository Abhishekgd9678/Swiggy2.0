import React, { useEffect, useState } from "react";
import Rescard from "./Res-card";
import Shimmer from "./shimmer";


const Body = () => {
  const [res, setres] = useState([]);
  const [style, setstyle] = useState("btn btn-outline-dark");
  const [Filtertext, setfiltertext] = useState("");
  const [search, setsearch] = useState("");
  console.log(search);

  const FilterTopRes = () => {

    if(search.length==0){setfiltertext("No input provided")}
    if (style === "btn btn-warning") {
      setres(Restaurants), setstyle("btn btn-outline-dark");
      setfiltertext("");
    } else {
      const Filtered = Restaurants.filter((res) => res.info.avgRating >= 4.5);
      setres(Filtered);
      setstyle("btn btn-warning");
      setfiltertext("Top Restaurants Near You");
    }
  };

  const filtersearch = () => {
    const filter = Restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setres(filter);
  };
 
  



  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.28475216724439&lng=76.64010163396597&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
  
        const data = await response.json();
        const respart = data?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
 
        setres(respart);
      
    };

    fetchData();
  }, []);

  if(res.length===0)
  {
    return(<Shimmer/>)
  }

  return (
    <>
      <div className="body">
        <div className="filters">
          <div className="search">
            <div>
              <input
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                type="text"
                placeholder="Search"
              />
            </div>
            <div>
              <button
                onClick={filtersearch}
                className="btn btn-warning"
                type="Submit"
              >
                Serach
              </button>
            </div>
          </div>
          <div className="res-filters">
            <button className={style} onClick={FilterTopRes} type="submit">
              Top Rated
            </button>
          </div>
        </div>
        <div>
          <h4 className="hidden-text">{Filtertext}</h4>
        </div>
        <div className="Card-Container">
          {res.map((rescard) => {
            return <Rescard key={rescard.info.id} data={rescard} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Body;
