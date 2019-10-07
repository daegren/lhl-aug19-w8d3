import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Counter from "../Counter";

afterEach(cleanup);

describe("Counter", () => {
  it("renders", () => {
    const { queryByText } = render(<Counter value={10} onChange={v => {}} />);

    expect(queryByText(/\+/i)).toBeTruthy();
    expect(queryByText(/-/i)).toBeTruthy();
    expect(queryByText(/10/)).toBeTruthy();
  });

  it("calls the onChange prop when the + or - buttons are clicked", () => {
    const handleChange = jest.fn();

    const { getByText } = render(<Counter value={0} onChange={handleChange} />);

    const plusButton = getByText(/\+/i);
    fireEvent.click(plusButton);

    expect(handleChange.mock.calls.length).toBe(1);
    expect(handleChange.mock.calls[0][0]).toBe(1);

    const minusButton = getByText("-");
    fireEvent.click(minusButton);

    expect(handleChange.mock.calls.length).toBe(2);
    expect(handleChange.mock.calls[1][0]).toBe(-1);
  });

  it("changes the value by a given step amount", () => {
    const handleChange = jest.fn();

    const { getByText } = render(
      <Counter value={0} onChange={handleChange} step={2} />
    );

    const plusButton = getByText(/\+/i);
    fireEvent.click(plusButton);

    expect(handleChange.mock.calls.length).toBe(1);
    expect(handleChange.mock.calls[0][0]).toBe(2);

    const minusButton = getByText("-");
    fireEvent.click(minusButton);

    expect(handleChange.mock.calls.length).toBe(2);
    expect(handleChange.mock.calls[1][0]).toBe(-2);
  });
});
