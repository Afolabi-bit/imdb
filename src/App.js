import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./home";
import Movie from "./movie";
import Featured from "./featured";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/movies/:id" element={<Movie />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
