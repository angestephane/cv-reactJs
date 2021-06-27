import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home  from "./pages/Home";
import  Contact  from "./pages/Contact";
import Competences from "./pages/Competences";
import NoFound from "./pages/NoFound";
import './styles/component.css';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Switch>
       <Route path="/" exact component={Home} /> 
       <Route path="/Competences" component={Competences} /> 
       <Route path="/Contact" component={Contact} /> 
       <Route component={NoFound} />
      </Switch> 
    </BrowserRouter>
    
  );
}

export default App;
