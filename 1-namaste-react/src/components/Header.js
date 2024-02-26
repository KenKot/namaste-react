import {useEffect, useState} from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  console.log("Header() ran");
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("Header.js - useEffect() fired");
  }, [btnName]);

  //no dep = called on every render
  //empty dep array = called only on initial render
  //[var1, var2] = called if any of these change

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
