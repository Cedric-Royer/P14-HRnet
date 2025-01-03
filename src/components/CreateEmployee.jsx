import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "./TitlePage";
import EmployeeForm from "./EmployeeForm";

function CreateEmployee() {
  function saveEmployee() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
    };

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));

    document.getElementById("confirmation").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("confirmation").style.display = "none";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <TitlePage title="HRnet" />
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
        id="create-employee"
      >
        <EmployeeForm />
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={saveEmployee}
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
