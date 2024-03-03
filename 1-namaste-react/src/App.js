import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery"));
// chunking/lazy loading/dynamic bundling/on-demand loading

import UserContext from "./utils/UserContext";

const AppLayout = () => {
  //authentication

  const [username, setUsername] = useState();

  useEffect(() => {
    //make an api all and send username and password
    const data = {
      name: "Jimmy",
    };
    setUsername(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />); OLD - before we used router
root.render(<RouterProvider router={appRouter} />);
