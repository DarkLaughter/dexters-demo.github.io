import React from "react";
import { Route, Switch } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from './components/NotFound';
import CategoriesPage from './components/CategoriesPage';

import "./app.css";

function App() {
  return (
    <div className="container" >
      <style>@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&family=Ranchers&display=swap');</style>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mandark" component={CategoriesPage}/>
        <Route exact path="/deedee" component={CategoriesPage}/>
        <Route render={() => <NotFound />} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
