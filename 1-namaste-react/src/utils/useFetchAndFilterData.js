import { useState, useEffect } from "react";

const useFetchAndFilterData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        const restaurants =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setData(restaurants);
        setFilteredData(restaurants);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };

    fetchData();
  }, []);

  const filterData = (text) => {
    setSearchText(text);
    const filtered = data.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const filterTopRated = () => {
    const filtered = data.filter((res) => res.info.avgRating > 4.4);
    setData(filtered);
    setFilteredData(filtered);
  };

  return {
    data,
    filteredData,
    searchText,
    setSearchText: filterData,
    filterTopRated,
  };
};

export default useFetchAndFilterData;
