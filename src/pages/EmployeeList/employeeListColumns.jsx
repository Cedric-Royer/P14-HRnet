import { compareAsc, parse } from "date-fns";

const dateColumns = ["startDate", "dateOfBirth"]; 

export const employeeListColumns = (employeeFields) => 
    employeeFields.map((item) => ({
      name: item.name,
      selector: (row) => row[item.id],
      sortable: true,
      sortFunction: dateColumns.includes(item.id)
        ? (a, b) => {
            const parseDate = (dateString) => {
              if (!dateString) return null;
              return parse(dateString, 'MM/dd/yyyy', new Date());
            };

            const dateA = parseDate(a[item.id]);
            const dateB = parseDate(b[item.id]);

            return compareAsc(dateA, dateB);
          }
        : undefined,
      cell: (row) => <div title={row[item.id]} className="limited-lines">{row[item.id]}</div>,
}));