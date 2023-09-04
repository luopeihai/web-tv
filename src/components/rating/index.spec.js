import { render, screen } from "@testing-library/react";
import Rating from "./index.tsx";

test("renders correct", async () => {
  const average = 8.5;
  render(<Rating average={average} />);
  expect(screen.getByText(average)).toBeInTheDocument();
});
