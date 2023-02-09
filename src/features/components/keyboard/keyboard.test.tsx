import { render, screen } from "@testing-library/react";
import { Keyboard } from "./keyboard";

describe("Given a keyboard element", () => {
  describe("When its render", () => {
    test("Then should be print in the screen", () => {});
    render(<Keyboard></Keyboard>);
  });
  const elements = screen.getByRole("list");
  expect(elements).toBeInTheDocument();
});
