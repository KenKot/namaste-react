import React from "react";
import useFetchAndFilterData from "../utils/useFetchAndFilterData"; // Adjust the path as necessary
import useOnlineStatus from "../utils/useOnlineStatus"; // Adjust the path as necessary
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const { filteredData, searchText, setSearchText, filterTopRated } =
    useFetchAndFilterData();

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You're offline</h1>;
  }

  return !filteredData.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => setSearchText(searchText)}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((res) => (
          <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
            <RestaurantCard res={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// ==========================================================
// OLD VERSION

// const Body = () => {
//   console.log("Body() triggered");
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     console.log("useEffect fired");
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//       // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();

//     console.log("fetchData fired: ", json);

//     // setData(json?.data?.cards[4]?.data?.data?.cards);
//     setData(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );

//     setFilteredData(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );

//     console.log(
//       "response data: ",
//       json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
//     );
//     // setData(json.data.cards[2].data.data.cards);
//   };

//   return !data.length ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             className="search-box"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               const filteredRestaurants = data.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredData(filteredRestaurants);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             console.log("filter button fired");
//             setData((prev) => prev.filter((res) => res.info.avgRating > 4.4));
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {filteredData.map((res, idx) => (
//           <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
//             <RestaurantCard res={res} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
