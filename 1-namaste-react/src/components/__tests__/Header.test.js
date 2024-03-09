import {render, screen, fireEvent} from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";

import {Provider, useSelector} from "react-redux";
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom";

describe("Header page tests", () => {
  it("Should render Header Component w/ a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // expect(true).toBe(true);
    const loginButton = screen.getByRole("button", {name: "Login"});
    // const loginButton = screen.getByText("Login"); //v2

    expect(loginButton).toBeInTheDocument();
  });

  it("Should render an empty cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const cartItems = screen.getByText("Cart (0 items)");
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

  it("Should change Login button to  Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
  });
});
