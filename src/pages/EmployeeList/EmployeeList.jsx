import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle";
import HeaderTitle from "../../components/HeaderTitle";
import { employeeListColumns } from "./employeeListColumns";
import { employeeListData } from "./employeeListData";

function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);
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
