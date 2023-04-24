import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders Header  text", () => {
  render(<App />);
  const headerText = screen.getByText(/Take a Picture/i);
  expect(headerText).toBeInTheDocument();
});
