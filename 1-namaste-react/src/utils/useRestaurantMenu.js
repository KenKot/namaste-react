import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const mockResInfo = {
    cards: [
      {}, // Empty objects to match the expected indexes
      {},
      {
        card: {
          card: {
            info: {
              name: "Mock Restaurant",
              cuisines: ["Italian", "Mexican"],
              costForTwoMessage: "$20 for two people (approx.)",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {}, // First empty object to match the expected index
                {
                  card: {
                    card: {
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: 1,
                              name: "Pizza Margherita",
                              description:
                                "Classic Margherita with mozzarella and basil",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: 2,
                              name: "Tacos al Pastor",
                              description:
                                "Pork tacos with pineapple and spices",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  };
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`
    );

    const json = await data.json();

    // console.log("!fetch DATA");
    // console.log(json);
    // console.log("! fetch DATA");

    // console.log("JSON.DATA: ", json.data);
    // setResInfo(mockResInfo);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
