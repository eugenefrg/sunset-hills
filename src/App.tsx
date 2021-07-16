import React, {useState} from "react";
import "./App.css";
import { HeroPage } from "./components/hero";
import "./styles/styles.css";
import { Footer } from "./components/footer";
import {MainContent} from "./components/mainContent";

const App: React.FC = () => {

  return (
    <div className="App" style={{height:"300vh"}}>
      <HeroPage />
      <MainContent/>
      <Footer />
    </div>
  );
};

export default App;
