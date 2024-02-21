import { CDN_URL } from "../utils/constants";

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
  } = props?.res?.info;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>${costForTwo / 1000} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
