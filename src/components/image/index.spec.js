import { render } from "@testing-library/react";
import Image from "./index.tsx";

test("renders correct", async () => {
  const { container } = render(
    <Image
      className="image"
      src="https://static.tvmaze.com/uploads/images/medium_portrait/143/358967.jpg-error"
    />
  );
  const img = container.querySelector(".image");
  expect(img).toBeInTheDocument();
});
