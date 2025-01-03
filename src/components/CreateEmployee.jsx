import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "./TitlePage";
import LabeledInput from "./FormElements/LabeledInput";
import LabeledSelect from "./FormElements/LabeledSelect";

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
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <LabeledInput id="first-name" label="First Name" type="text" />
          <LabeledInput id="last-name" label="Last Name" type="text" />
          <LabeledInput id="date-of-birth" label="Date of Birth" type="text" />
          <LabeledInput id="start-date" label="Start Date" type="text" />


          <fieldset className="address">
            <legend>Address</legend>
            <LabeledInput id="street" label="Street" type="text" />
            <LabeledInput id="city" label="City" type="text" />
            <LabeledSelect name="state" id="state" label="State" />
            <LabeledInput id="zip-code" label="Zip Code" type="number" />
          </fieldset>

          <LabeledSelect name="department" id="department" label="Department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </LabeledSelect>
        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>

      <div id="confirmation" className="modal-container" style={{ display: 'none' }}>
        <div className="modal">
          Employee Created!
          <span className="close" onClick={closeModal}>&times;</span>
        </div>
      </div>
    </>
  );
}

export default CreateEmployee;

