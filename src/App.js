import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Intro from "./view/Intro";
import AboutMe from "./view/AboutMe";
import Project from "./view/Project";
import Contact from "./view/Contact";

function App() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Project />
      <Contact />
    </>
  );
}

export default App;
