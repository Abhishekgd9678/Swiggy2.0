import React, { useEffect, useState } from "react";
import Rescard from "./Res-card";
import Shimmer from "./shimmer";

const Body = () => {
  const [res, setres] = useState([]);
  const [filterd, setfiltered] = useState([]);
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

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.28475216724439&lng=76.64010163396597&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    var respart =
      data?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setres(respart);
    setfiltered(respart);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            return <Rescard key={rescard.info.id} data={rescard} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Body;
