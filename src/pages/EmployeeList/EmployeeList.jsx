import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle";
import HeaderTitle from "../../components/HeaderTitle";
import { getEmployeesFromStorage } from "../../utils/employeeUtils";
import { employeeListColumns } from "./employeeListColumns";
import { employeeListData } from "./employeeListData";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getEmployeesFromStorage());
  }, []);

  const columns = employeeListColumns(employeeListData);

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
