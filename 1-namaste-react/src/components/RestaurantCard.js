import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = props?.res?.info || {};

  return (
    <div
      data-testid="resCard"
      className="w-40 p-4 m-4 bg-gray-100 rounded-lg hover:bg-gray-200"
    >
      <img
        className="w-48 rounded-lg"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3 className="py-2 text-lg font-bold">{name}</h3>
      {cuisines?.length ? (
        <h4 className="text-gray-700">{cuisines.join(", ")}</h4>
      ) : (
        <h4 className="text-gray-500">No cuisines</h4>
      )}
      <h4 className="text-gray-600">{avgRating} stars</h4>
      <h4 className="text-gray-600">${costForTwo / 1000} FOR TWO</h4>
      <h4 className="text-gray-600">{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-0 p-2 m-2 text-sm font-bold text-white bg-red-500 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

// // de-structuring props:
// // const RestaurantCard = ({resName}) => {
// const RestaurantCard = (props) => {
//   // inline CSS version 2
//   // <div className="res-card" style={{backgroundColor: "blue"}}>

//   const styleCard = {
//     backgroundColor: "#f0f0f0",
//   };

//   const {
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     deliveryTime,
//     cloudinaryImageId,
//   } = props?.res?.info || {};

//   return (
//     <div className="w-40 m-4" style={styleCard}>
//       <img
//         className="w-48 res-logo "
//         src={`${CDN_URL}${cloudinaryImageId}`}
//         alt="res-logo"
//       />
//       <h3>{name}</h3>
//       {cuisines?.length ? <h4>{cuisines.join(", ")}</h4> : "no cuisines"}
//       <h4>{avgRating}</h4>
//       <h4>${costForTwo / 1000} FOR TWO</h4>
//       <h4>{deliveryTime} minutes</h4>
//     </div>
//   );
// };

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="p-2 text-center text-white txt-xl bg-red-950 color ">
//           Promoted
//         </label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

// export default RestaurantCard;
