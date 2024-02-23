import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";

const Body = () => {
  console.log("Body() triggered");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect fired");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log("fetchData fired: ", json);

    // setData(json?.data?.cards[4]?.data?.data?.cards);
    setData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      "response data: ",
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    // setData(json.data.cards[2].data.data.cards);
  };

  return !data.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = data.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredData(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("filter button fired");
            setData((prev) => prev.filter((res) => res.info.avgRating > 4.4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((res, idx) => (
          <RestaurantCard res={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
