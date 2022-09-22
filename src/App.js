import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Addcard} from './components';
import {Successcard} from './components';
import './App.css';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Addcard />}/>
        <Route exact path="/success" element={<Successcard />}/>
      </Routes>
    </Router>
  );
}

export default App;