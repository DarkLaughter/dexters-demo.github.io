import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./app.css";

function App() {
  return (
    <div className="container" >
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
