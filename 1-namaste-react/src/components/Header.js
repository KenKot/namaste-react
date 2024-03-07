import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {}, [btnName]);

  //no dep = called on every render
  //empty dep array = called only on initial render
  //[var1, var2] = called if any of these change

  const onlineStatus = useOnlineStatus();

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-12 ">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-xl font-bold ">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              className="px-4"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
