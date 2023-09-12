import React from "react";
import "./index.css";
import {Routes,Route }from 'react-router-dom'
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import MoreProject from "./Components/MoreProject";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Contact/:id" element={<Contact />} />
      <Route path="/MoreProject" element={<MoreProject />} />
    
    </Routes>
  );
}

export default App;
