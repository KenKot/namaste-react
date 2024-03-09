import React from "react";
import useFetchAndFilterData from "../utils/useFetchAndFilterData"; // Adjust the path as necessary
import useOnlineStatus from "../utils/useOnlineStatus"; // Adjust the path as necessary
import Shimmer from "./Shimmer";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {Link} from "react-router-dom";

import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {
    data,
    setData,
    filteredData,
    setFilteredData,
    searchText,
    setSearchText,
  } = useFetchAndFilterData();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); //higher-order component
  const onlineStatus = useOnlineStatus();

  const {setUsername, loggedInUser} = useContext(UserContext);

  if (!onlineStatus) {
    return <div>You're offline</div>;
  }

  return !data?.length ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="flex justify-center gap-4 mx-4">
        <div className="mx-4 flex items-center border border-black border-solid p-2">
          <input
            type="text"
            className="p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-8 py-2 bg-green-100 m-2 rounded-lg"
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
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              setData((prev) => prev.filter((res) => res.info.avgRating > 4.4));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="flex items-center">
          <label htmlFor="Username" className="p-2">
            Username:{" "}
          </label>
          <input
            className="border border-black p-2"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={loggedInUser}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredData.map((res, idx) => {
          return (
            <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
              {res.info.avgRating > 4.3 ? (
                <RestaurantCardPromoted res={res} />
              ) : (
                <RestaurantCard res={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
