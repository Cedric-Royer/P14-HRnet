import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "./TitlePage";
import LabeledInput from "./FormElements/LabeledInput";

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
      zipCode: zipCode.value
    };

    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

    document.getElementById("confirmation").style.display = "block";
  }

  function closeModal() {
    document.getElementById("confirmation").style.display = "none";
  }

  return (
    <>
      <TitlePage title="HRnet" />
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <LabeledInput id="first-name" label="First Name" type="text" />
          <LabeledInput id="last-name" label="Last Name" type="text" />


          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>

      <div style={{ display: 'none' }}>
        <div id="confirmation" className="modal">
          Employee Created!
          <span className="close" onClick={closeModal}>&times;</span>
        </div>
      </div>
    </>
  );
}

export default CreateEmployee;

