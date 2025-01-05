import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DocumentTitle from "../components/DocumentTitle";
import HeaderTitle from "../components/HeaderTitle";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
        name: "Date of Birth",
        selector: (row) => row.dateOfBirth,
        sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: false,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  return (
    <>
      <DocumentTitle title="Current Employees | HRnet" />
      <HeaderTitle title="Current Employees" />
      <div className="datatable-container">

              <DataTable
                  columns={columns}
                  data={employees}
                  pagination
                  responsive
                  striped
              />
              
      <div className="page-link">
          <Link to="/">Home</Link>
      </div>
      </div>
    </>

  );
}

export default EmployeeList;
