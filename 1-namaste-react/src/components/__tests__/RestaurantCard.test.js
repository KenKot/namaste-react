import {render, screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

import {withPromotedLabel} from "../RestaurantCard";
import promotedResCardMock from "./mocks/promotedResCardMock.json";

it("should render RestaurantCard component w/ props data", () => {
  const res = MOCK_DATA;
  render(<RestaurantCard res={res} />);

  const name = screen.getByText("The Meals Junction");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component w/ promoted label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); //higher-order component
  render(<RestaurantCardPromoted res={promotedResCardMock} />);

  const name = screen.getByText("Brahmins Tiffin Centre");

  expect(name).toBeInTheDocument();
});
