import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";

import {useState, useEffect} from "react";

const Body = () => {
  const [data, setData] = useState(mockData);

  useEffect(() => {}, []);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("hi");
            setData((prev) => prev.filter((res) => res.data.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {data.map((res) => (
          <RestaurantCard res={res} key={res?.data?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
