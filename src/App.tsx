// import "./App.css";

import { findLongestPath } from "./helpers/helper";
import { PathData } from "./types/types";

function App() {
  const jumpingBranches: number[] = [12, 2, 17, 1, 5];

  const path: PathData = findLongestPath(jumpingBranches);

  return (
    <div className="App">
      <h1>Squirrel Jump Programming problem</h1>
      <h2>HOW MANY JUMPS : {path.jumpOccurance}</h2>
      {path.pathStepsTaken.map((step, idx) => (
        <h1 key={idx}>INDEX OF STEP: {step}</h1>
      ))}
    </div>
  );
}

export default App;
