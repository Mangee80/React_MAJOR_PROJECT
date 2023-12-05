import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Genre from "./pages/Genre";
import Browse from "./pages/Browse";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
