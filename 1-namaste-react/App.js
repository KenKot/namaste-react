import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div", //what type of tag?
  { id: "parent" }, //what attributes?
  React.createElement(
    //the children - this can be converted to an array for multiple children
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h1", {}, "I am an h1 tag also!"),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
