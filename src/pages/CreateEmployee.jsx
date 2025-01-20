import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeeSlice";
import DocumentTitle from "../components/DocumentTitle";
import HeaderTitle from "../components/HeaderTitle";
import EmployeeForm from "../components/EmployeeForm";
import Modal from "../components/Modal";

function CreateEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  function saveEmployee(event) {
    event.preventDefault();
    const form = event.target.closest("form");
    const formData = new FormData(form);
    const employee = Object.fromEntries(formData.entries());
    dispatch(addEmployee(employee)); // Ajoute au store
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <DocumentTitle title="Create Employee | HRnet" />
      <HeaderTitle title="HRnet" />
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
      </div>

      <form
        onSubmit={saveEmployee}
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

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Employee Created!"
      />
    </>
  );
}

export default CreateEmployee;
