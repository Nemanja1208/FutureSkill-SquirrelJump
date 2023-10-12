import { PathData } from "../types/types";

export const getAvailableStepValues = (
  currentIndex: number,
  jumpingBranches: number[]
): { index: number; value: number }[] => {
  return [
    { index: currentIndex - 2, value: jumpingBranches[currentIndex - 2] },
    { index: currentIndex - 1, value: jumpingBranches[currentIndex - 1] },
    { index: currentIndex + 1, value: jumpingBranches[currentIndex + 1] },
    { index: currentIndex + 2, value: jumpingBranches[currentIndex + 2] },
  ].filter((step) => step.value < jumpingBranches[currentIndex]);
};

export const findLongestPath = (branches: number[]): PathData => {
  let maxPath: PathData = { jumpOccurance: 0, pathStepsTaken: [] };

  branches.forEach((_, index) => {
    let path: PathData = { jumpOccurance: 1, pathStepsTaken: [index] };
    let currentIndex = index;

    const getHighestStepLowerThanCurrent = (
      steps: { index: number; value: number }[]
    ) => {
      return steps.reduce(
        (max, curr) => (curr.value > max.value ? curr : max),
        steps[0]
      );
    };

    while (true) {
      const availableSteps = getAvailableStepValues(currentIndex, branches);

      if (availableSteps.length === 0) break;

      const highestStep = getHighestStepLowerThanCurrent(availableSteps);
      path.jumpOccurance++;
      path.pathStepsTaken.push(highestStep.index);
      currentIndex = highestStep.index;
    }

    if (path.jumpOccurance > maxPath.jumpOccurance) {
      maxPath = path;
    }
  });

  return maxPath;
};
