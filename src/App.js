import React from "react";
import "./App.css";
import MainScreen from "./screens/MainScreen";
import MenuScreen from "./screens/MenuScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@materializecss/materialize/dist/css/materialize.min.css";
import "@materializecss/materialize/dist/js/materialize.min.js";
import "./style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
