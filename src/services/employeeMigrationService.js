import { setEmployees } from "../store/employeeSlice"; 

export function migrateEmployeesFromStorageIfNeeded(dispatch) {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
  
    if (storedEmployees.length > 0) {
      dispatch(setEmployees(storedEmployees));
  
      localStorage.removeItem("employees");
    }
  }
  
  