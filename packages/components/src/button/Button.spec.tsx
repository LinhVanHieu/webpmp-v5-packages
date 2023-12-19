import React from "react";
import { render } from "@testing-library/react";
import { Button } from "..";

test("renders button", () => {
  const { getByText } = render(<Button />);
  const linkElement = getByText(/button/i);
  expect(linkElement).toBeDefined();
});
