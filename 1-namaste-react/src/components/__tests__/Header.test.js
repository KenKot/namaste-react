import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";

import { useSelector } from "react-redux";

describe("Header page tests", () => {
  it("Should load Header Component w/ a login button", () => {
    render(<Header />);
  });
});
k;
