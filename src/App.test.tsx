import { render, screen } from "@testing-library/react";
import { findLongestPath } from "./helpers/helper";
import App from "./App";

describe("Squirrel Jump App", () => {
  it("renders without crashing", () => {
    render(<App />);
    const heading = screen.getByText(/Squirrel Jump Programming problem/i);
    expect(heading).toBeInTheDocument();
  });

  describe("findLongestPath function", () => {
    it("returns the correct longest path", () => {
      const branches = [12, 2, 17, 1, 5];
      const path = findLongestPath(branches);
      expect(path.jumpOccurance).toBe(4);
      console.log(path);
      expect(path.pathStepsTaken).toEqual([2, 0, 1, 3]);
    });

    it("returns the correct longest path v2", () => {
      const branches = [6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12];
      const path = findLongestPath(branches);
      expect(path.jumpOccurance).toBe(6);
      console.log(path);
      expect(path.pathStepsTaken).toEqual([10, 8, 6, 4, 3, 1]);
    });
  });
});
