import { Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";

import React from "react";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App;
