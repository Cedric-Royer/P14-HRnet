import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import EmployeeForm from "../components/EmployeeForm";

function CreateEmployee() {
  function saveEmployee(event) {
    event.preventDefault();
  
    const form = event.target.closest("form");
    const formData = new FormData(form);
  
    const employee = Object.fromEntries(formData.entries()); 
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
  
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  
    document.getElementById("confirmation").style.display = "flex";
  }
  

  function closeModal() {
    document.getElementById("confirmation").style.display = "none";
  }

  return (
    <>
      <TitlePage title="HRnet" />
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
      </div>

      <form
        onSubmit={(event) => {
          saveEmployee(event);
        }}
        className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
        id="create-employee"
      >
        <EmployeeForm />
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
      <div id="confirmation" className="modal-container" style={{ display: "none" }}>
        <div className="modal">
          Employee Created!
          <span className="close" onClick={closeModal}>
            &times;
          </span>
        </div>
      </div>
    </>
  );
}

export default CreateEmployee;
