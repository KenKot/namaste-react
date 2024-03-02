import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

  console.log("RESTAURANT ID:", resId);
  console.log("const resInfo = useRestaurantMenu(resId);:", resInfo);

  if (!resInfo) return <Shimmer />;

  const {name, cuisines, costForTwoMessage} =
    resInfo?.cards[0]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  // const cardsTemp =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
  //     console.log(c.card.card["@type"]);
  //     c.card.card["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge";
  //   });

  // const cardsTemp =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // console.log("cardsTemp: ", cardsTemp);

  console.log("itemCards: ", itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h2>
      <hr />

      <h2>Menu:</h2>

      {itemCards?.length ? (
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
