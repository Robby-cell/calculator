import Display from "./components/Display";
import Numpad from "./components/Numpad";

import "./App.css";
import { useState } from "react";

function App() {
  // could make this a vector so that we can pop entries, like cos, which is 3 characters
  const [display, setDisplay] = useState("0");

  const removeCharAt = function (str: string, i: number): string {
    let tmp = str.split(""); // convert to an array
    tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(""); // reconstruct the string
  };

  const updateDisplay = function (newChar: string) {
    setDisplay((currentDisplay) => {
      if (newChar == "=")
        try {
          return String(eval(currentDisplay)) as string;
        } catch {
          return currentDisplay;
        }
      else if (newChar == "del") {
        return removeCharAt(currentDisplay, currentDisplay.length);
      }
      if (currentDisplay != "0") {
        return currentDisplay + newChar;
      } else return newChar;
    });
  };

  return (
    <div className="app">
      <div className="calc">
        <Display display={display} />
        <Numpad updateDisplay={updateDisplay} />
      </div>
    </div>
  );
}

export default App;
