import React, { useState } from "react";
import "./App.css";
import { Rnd } from "react-rnd";

/*
    TO DO:
    Styling for computer view
    Do a Low-Fi first (since I have the MVP for the coding challenge now)
        1 for Desktop
        1 for Mobile
    Get color Scheme
    Figure out how to do repeating patterns for a building style
    figure out how to randomly shape the top of the buildings
    make it look good
    - have intro / hero section
    - have main area
    - have about
    Deploy initial work for Desktop View
    Upgrade for Mobile responsiveness (The tower area can be resized too by generation)
 */

function App() {
  const towerWidth = 100;
  const towerTopOffset = 500;
  const towerHeight = 20;
  const towers: number[] = new Array(5).fill(towerHeight);
  const [towerData, setTowerData] = useState(towers);
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
  };

  const highestBeforeTower = (index: number) => {
    return towerData.slice(0, index).sort((a, b) => b - a)[0];
  };

  const generateLightingStyle = (index: number) => {
    const highest = highestBeforeTower(index);
    const currentHeight = towerData[index];
    let colorOffset = 100;
    if (index !== 0) {
      if (highest > currentHeight) {
        colorOffset = 0;
      } else {
        colorOffset =
          ((currentHeight - highest) / (currentHeight + highest)) * 100;
      }
    }
    const newBg = `linear-gradient(180deg, rgba(255, 203, 0,1) 0%, rgba(184,22,22,1) ${colorOffset}%, rgba(62,62,62,1) ${
      colorOffset !== 100 ? colorOffset + 10 : 100
    }%)`;
    return newBg;
  };

  return (
    <div className="App">
      {towers.map((tower, index) => {
        return (
          <Rnd
              key={`tower_${index}`}
            style={{ ...style, background: generateLightingStyle(index) }}
            minHeight={towerHeight}
            maxHeight={towerTopOffset}
            onResize={(e, dir, elementRef, delta, position) => {
              const newTowerData = towerData;
              newTowerData[index] = elementRef.offsetHeight;
              setTowerData([...newTowerData]);
            }}
            default={{
              x: 0 + index * (towerWidth * 1.5),
              y: towerTopOffset,
              width: towerWidth,
              height: towerHeight,
            }}
            enableResizing={{
              top: true,
            }}
            disableDragging
          >
            {towerData[index]}
          </Rnd>
        );
      })}
    </div>
  );
}

export default App;
