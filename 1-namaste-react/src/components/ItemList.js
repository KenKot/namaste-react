import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="flex justify-between p-2 m-2 text-left border-b-2 border-gray-200"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 text-white bg-black rounded-lg shadow-lg"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

// old below:

// import { CDN_URL } from "../utils/constants";

// const ItemList = ({ items }) => {
//   //   console.log("ItemList()'s first item: ", items[0].card.info);
//   return (
//     <div>
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="p-2 m-2 text-left border-b-2 border-gray-200 "
//         >
//           <img
//             src={`${CDN_URL}${item.card.info.imageId}`}
//             alt="food pic"
//             className="w-14"
//           />
//           <div className="p-2">
//             <span>{item.card.info.name}</span>
//             <span> - ${item.card.info.price / 1000}</span>
//           </div>
//           <p className="text-xs">{item.card.info.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;
