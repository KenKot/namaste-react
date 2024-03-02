import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const {name, cuisines, costForTwoMessage} =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h2>
      <hr />

      <h2>Menu:</h2>

      {itemCards ? (
        <>
          {itemCards.map((itemCard) => (
            <div key={itemCard.card.info.id}>
              <h3>{itemCard.card.info.name}</h3>
              <h5>{itemCard.card.info.description}</h5>
              <br />
            </div>
          ))}
        </>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default RestaurantMenu;

// =========================================
// OLD VERSION

// const RestaurantMenu = () => {
//   console.log("RestaurantMenu()  Fired");

//   const [resInfo, setResInfo] = useState(null);

//   const { resId } = useParams();

//   useEffect(() => {
//     console.log("RestaurantMenu's useEffect Fired");
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`
//     );

//     const json = await data.json();
//     console.log("json.data: ", json.data);
//     console.log(
//       "menu cards: ",
//       json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
//       //   [1].card.card.itemCards
//     );

//     // v2
//     setResInfo(json.data);

//     // v1
//     // setResInfo(json?.data?.cards[2]?.card?.card?.info);
//   };

//   if (!resInfo) return <Shimmer />;

//   //   v2
//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[2]?.card?.card?.info;
//   // resInfo?.cards[2]?.card?.card?.info || {};

//   const itemCards =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
//       ?.itemCards;

//   console.log("itemCards: ", itemCards);

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       {/* <h1>{resInfo.name}</h1> */}
//       <h2>
//         {cuisines?.join(", ")} - {costForTwoMessage}
//         {/* {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage} */}
//       </h2>
//       <hr />

//       <h2>Menu:</h2>

//       {itemCards ? (
//         <>
//           {itemCards.map((itemCard) => (
//             <div key={itemCard.card.info.id}>
//               <h3>{itemCard.card.info.name}</h3>
//               <h5>{itemCard.card.info.description}</h5>
//               <br />
//             </div>
//           ))}
//         </>
//       ) : (
//         <p>No items found</p>
//       )}
//     </div>
//   );
// };

// export default RestaurantMenu;
