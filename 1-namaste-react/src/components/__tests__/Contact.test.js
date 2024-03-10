import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page Test case", () => {
  beforeAll(() => {
    // console.log("Before all");
  });

  afterAll(() => {
    // console.log("Before all");
  });

  beforeEach(() => {
    //helpful if you have to do some clean up tasks
    // console.log("Before each");
  });

  afterEach(() => {
    // console.log("Before each");
  });

  it("Should load contact us component", () => {
    //render component on JSDOM first
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact Component", () => {
    //render component on JSDOM first
    render(<Contact />);
    const button = screen.getByRole("button");
    //   const button = screen.getByText("random");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    //   expect(inputBoxes).toBeInTheDocument();
    expect(inputBoxes.length).toBe(2);
  });
});
