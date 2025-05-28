import { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle";
import HeaderTitle from "../../components/HeaderTitle";
import { employeeListColumns } from "./employeeListColumns";
import { employeeListData } from "./employeeListData";
import { commonInputClasses } from "../../utils/inputClasses";

function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);
  const columns = employeeListColumns(employeeListData);
  const [filterText, setFilterText] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );

  return (
    <div className="mr-2 ml-2">
      <DocumentTitle title="Current Employees | HRnet" />
      <HeaderTitle title="Current Employees" />
      <div className="datatable-container">
        <input
          type="text"
          placeholder="Search..."
          className={commonInputClasses}
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <DataTable
          columns={columns}
          data={filteredEmployees}
          pagination
          responsive
          striped
        />
        <div className="page-link">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
