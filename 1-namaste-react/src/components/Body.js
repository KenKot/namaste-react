import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";

import { useState, useEffect } from "react";

const Body = () => {
  // const [data, setData] = useState(mockData);   OLD
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("useEffect fired");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);

    // setData(json?.data?.cards[4]?.data?.data?.cards);

    setData(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    console.log(
      "~~~",
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    // setData(json.data.cards[2].data.data.cards);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("filter button fired");
            // setData((prev) => prev.filter((res) => res.data.avgRating > 4));
            setData((prev) => prev.filter((res) => res.info.avgRating > 4.4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {data.map((res, idx) => (
          // <RestaurantCard res={res} key={res?.data?.id} />
          <RestaurantCard res={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
