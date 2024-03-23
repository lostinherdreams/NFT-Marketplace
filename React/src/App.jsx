import { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
import {Create} from './pages/Create';
import {Profile} from './pages/Profile';
import { Layout } from "./Layout";

function App() {
  return(
  <Router>
    <Routes>
      <Route element = {<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
  </Router>
  )
}

export default App;
