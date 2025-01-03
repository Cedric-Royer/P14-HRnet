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

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Form submitted!"); 
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
        action="#"
        id="create-employee"
    >
      <div className="space-y-1">
      <h2 className="text-base/7 font-semibold text-gray-900">Create Employee</h2>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <LabeledInput id="first-name" label="First Name" type="text" />
            </div>

            <div className="sm:col-span-3">
                <LabeledInput id="last-name" label="Last Name" type="text" />
            </div>

            <div className="sm:col-span-3">
                <LabeledInput id="date-of-birth" label="Date of Birth" type="text" />
            </div>

            <div className="sm:col-span-3">
                <LabeledInput id="start-date" label="Start Date" type="text" />
            </div>

            <div className="col-span-full">
                <LabeledInput id="street" label="Street" type="text" />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
                <LabeledInput id="city" label="City" type="text" />
            </div>

            <div className="sm:col-span-2">
                <LabeledSelect name="state" id="state" label="State" ></LabeledSelect>
            </div>

            <div className="sm:col-span-2">
                <LabeledInput id="zip-code" label="Zip Code" type="number" />
            </div>
            <div className="sm:col-span-3">
                <LabeledSelect id="department" label="Department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </LabeledSelect>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={saveEmployee}
        >
          Save
        </button>
      </div>
    </form>
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

