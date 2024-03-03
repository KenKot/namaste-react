import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log("ItemList()'s first item: ", items[0].card.info);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left "
        >
          <img
            src={`${CDN_URL}${item.card.info.imageId}`}
            alt="food pic"
            className="w-14"
          />
          <div className="p-2">
            <span>{item.card.info.name}</span>
            <span> - ${item.card.info.price / 1000}</span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
