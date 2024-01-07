import React, { useEffect, useState } from "react";
import Rescard from "./Res-card";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import useResinfo from "../utils/useResinfo";

const Body = () => {

  const res=useResinfo();

  const [filterd, setfiltered] = useState(res);
  useEffect(()=>{setfiltered(res)},[res])
 
  const [search, setsearch] = useState("");
  const [filterstate, setfilterstate] = useState(0);

  const FilterTopRes = () => {
    if (!filterstate) {
      const Filtered = res.filter((res) => res.info.avgRating >= 4.5);
      setfiltered(Filtered);
      setfilterstate(1);
    } else {
      setfiltered(res);
      setfilterstate(0);
      
    }
  };

  const filtersearch = () => {
    const filter = res.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setfiltered(filter);
  };


  if (res.length === 0) {
 
    return <Shimmer />;
  
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
            <button
              className="btn btn-outline-dark"
             onClick={FilterTopRes}
             type="submit"
            >
              Top Rated
            </button>
          </div>
        </div>

        <div className="Card-Container">
          {filterd.map((rescard) => {
            return <Link to={'/res/'+rescard.info.id} key={rescard.info.id}><Rescard  data={rescard} /></Link>;
          })}
        </div>
      </div>
    </>
  );
};
export default Body;
