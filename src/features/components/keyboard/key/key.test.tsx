import { render, screen } from "@testing-library/react";
import { Key } from "./key";

describe("Given a key component", () => {
  describe("When its render", () => {
    test("Then it should appear in the screen", () => {});
    render(<Key></Key>);
  });
  const elements = screen.getByText("2");
  expect(elements).toBeInTheDocument();
});
