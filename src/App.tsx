import React  from "react";
import "./App.css";
import {HeroPage} from "./components/hero";

import "./styles/styles.css"
import {CanvasContent} from "./components/mainContent/canvasContent";

/*
    TO DO:
    Styling for computer view
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

const App:React.FC = () => {
  return (
    <div className="App">
      <HeroPage/>
      <CanvasContent/>
    </div>
  );
}

export default App;
