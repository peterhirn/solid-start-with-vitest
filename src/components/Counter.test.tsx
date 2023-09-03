import { describe, it, expect} from "vitest"
import { fireEvent, render } from "@solidjs/testing-library";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("increments value", async () => {
    const { queryByRole, unmount } = render(() => <Counter />);
    const button = queryByRole("button") as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Clicks: 0/);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/Clicks: 1/);
    unmount();
  });

  it("renders 1", () => {
    const { container, unmount } = render(() => <Counter />);
    expect(container).toMatchSnapshot();
    unmount();
  });
});
