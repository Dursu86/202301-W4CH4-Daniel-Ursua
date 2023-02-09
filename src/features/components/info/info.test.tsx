import { render, screen } from "@testing-library/react";
import { Info } from "./info";

describe("Given a info element", () => {
  describe("When its render", () => {
    test("Then should be print in the screen", () => {});
    render(<Info></Info>);
  });
  const elements = screen.getByText(/Calling/i);
  expect(elements).toBeInTheDocument();
});
