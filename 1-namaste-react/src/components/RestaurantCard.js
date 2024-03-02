import {CDN_URL} from "../utils/constants";

// de-structuring props:
// const RestaurantCard = ({resName}) => {
const RestaurantCard = (props) => {
  // inline CSS version 2
  // <div className="res-card" style={{backgroundColor: "blue"}}>

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = props?.res?.info || {};

  console.log(cuisines);

  return (
    <div className=" " style={styleCard}>
      <img
        className="res-logo w-48 "
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      {cuisines?.length ? <h4>{cuisines.join(", ")}</h4> : "no cuisines"}
      <h4>{avgRating}</h4>
      <h4>${costForTwo / 1000} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="txt-xl bg-red-950 color text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
