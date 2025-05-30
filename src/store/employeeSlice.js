import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    }
  },
});

export const { addEmployee, setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
