import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Fortnite Store.</h1>
      <About />
      <Shop />
    </div>
  );
}

export default App;
