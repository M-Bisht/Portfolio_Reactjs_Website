import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Home from "./Home";
const App = () => {
  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Main>
  );
};

export default App;
