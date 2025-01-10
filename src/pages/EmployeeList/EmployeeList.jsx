import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle";
import HeaderTitle from "../../components/HeaderTitle";
import { employeeListData } from "./employeeListData";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const columns = employeeListData.map(item => ({
    name: item.name,
    selector: (row) => row.row[item.id],
    sortable: true,
    cell: (row) => <div title={row[item.id]} className="limited-lines">{row[item.id]}</div>
  }));
  
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
