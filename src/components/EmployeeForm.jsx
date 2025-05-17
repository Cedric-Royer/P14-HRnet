import { useState } from "react";
import LabeledTextInput from "./FormElements/LabeledTextInput";
import LabeledDateInput from "./FormElements/LabeledDateInput";
import LabeledSelect from "./FormElements/LabeledSelect";
import FormSection from "./FormElements/FormSection";
import states from "./FormElements/constants/states";
import departments from "./FormElements/constants/departments";

function EmployeeForm() {
  const [dateOfBirth, setDateOfBirth] = useState(null); 
  const [startDate, setStartDate] = useState(null); 

  return (
    <FormSection title="Create Employee">
      <div className="sm:col-span-3">
        <LabeledTextInput id="first-name" name="firstName" label="First Name" type="text" required />
      </div>
      <div className="sm:col-span-3">
        <LabeledTextInput id="last-name" name="lastName" label="Last Name" type="text" required />
      </div>
      <div className="sm:col-span-3">
        <LabeledDateInput
          id="date-of-birth"
          name="dateOfBirth"
          label="Date of Birth"
          value={dateOfBirth}
          onChange={(date) => setDateOfBirth(date)}
          required
        />
      </div>
      <div className="sm:col-span-3">
        <LabeledDateInput
          id="start-date"
          name="startDate"
          label="Start Date"
          value={startDate}
          onChange={(date) => setStartDate(date)}
          required 
        />
      </div>
      <div className="col-span-full">
        <LabeledTextInput id="street" name="street" label="Street" type="text" required />
      </div>
      <div className="sm:col-span-2 sm:col-start-1">
        <LabeledTextInput id="city" name="city" label="City" type="text" required />
      </div>
      <div className="sm:col-span-2">
        <LabeledSelect id="state" name="state" label="State">
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </LabeledSelect>
      </div>
      <div className="sm:col-span-2">
        <LabeledTextInput id="zip-code" name="zipCode" label="Zip Code" type="number" required />
      </div>
      <div className="sm:col-span-3">
        <LabeledSelect id="department" name="department" label="Department">
          {departments.map((dept) => (
            <option key={dept}>{dept}</option>
          ))}
        </LabeledSelect>
      </div>
    </FormSection>
  );
}

export default EmployeeForm;
