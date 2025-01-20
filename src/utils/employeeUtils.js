export function saveEmployeeToStorage(form) {
    const formData = new FormData(form);
    const employee = Object.fromEntries(formData.entries());
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
  
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
}

export function getEmployeesFromStorage() {
    return JSON.parse(localStorage.getItem("employees")) || [];
}