import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Intro from "./view/Intro";
import AboutMe from "./view/AboutMe";
import Project from "./view/Project";
import Contact from "./view/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
