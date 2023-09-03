import { render } from "@solidjs/testing-library";
import NotFound from "./[...404].jsx";

describe("<NotFound />", () => {
  it("renders page not found", async () => {
    const { queryByRole, unmount } = render(() => <NotFound />);
    const heading = queryByRole("heading", { level: 1 }) as HTMLHeadingElement;
    expect(heading).toHaveTextContent("Page Not Found");
    unmount();
  });
});
