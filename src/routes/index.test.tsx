import { render } from "@solidjs/testing-library";
import Home from "./index.jsx";

describe("<Home />", () => {
  it("renders hello world", async () => {
    const { queryByRole, unmount } = render(() => <Home />);
    const heading = queryByRole("heading", { level: 1 }) as HTMLHeadingElement;
    expect(heading).toHaveTextContent("Hello world!");
    unmount();
  });
});
