import { LOGO_URL, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    //like an event listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <div className="absolute px-8  py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-center md:justify-between flex-row ">
      <img src={LOGO_URL} alt="netflix logo" className="w-44 mx-auto md:mx-0" />
      {user && (
        <div className="flex p-2 justify-between">
          <button
            className="py-2 px-4 rounded-lg mx-4 my-2 m-2 text-white bg-purple-800"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Browse" : "Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="user avatar"
            className="hidden  md:block w-12 h-12 "
          />

          <button className="font-bold text-white " onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
