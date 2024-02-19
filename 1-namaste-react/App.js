import React from "react";
import ReactDOM from "react-dom/client";

// React Element
//tag       attributes   children(can be an array)
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

const Parent = () => {
  return (
    <div>
      <h1>Parent stuff</h1>
      <Child />
    </div>
  );
};

const Child = () => {
  return <h3>child stuff</h3>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
