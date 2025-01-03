import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
