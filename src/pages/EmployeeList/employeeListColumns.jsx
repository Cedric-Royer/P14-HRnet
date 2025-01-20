export const employeeListColumns = (employeeFields) => 
    employeeFields.map((item) => ({
      name: item.name,
      selector: (row) => row[item.id],
      sortable: true,
      cell: (row) => <div title={row[item.id]} className="limited-lines">{row[item.id]}</div>,
}));