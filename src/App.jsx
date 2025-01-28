import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/P14-HRnet/" element={<CreateEmployee />} />
        <Route path="/P14-HRnet/employee-list" element={<EmployeeList />} />        
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
