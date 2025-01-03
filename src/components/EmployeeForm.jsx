import React from "react";
import LabeledInput from "./FormElements/LabeledInput";
import LabeledSelect from "./FormElements/LabeledSelect";
import FormSection from "./FormSection";

function EmployeeForm() {
  return (
    <FormSection title="Create Employee">
      <div className="sm:col-span-3">
        <LabeledInput id="first-name" name="firstName" label="First Name" type="text" />
      </div>
      <div className="sm:col-span-3">
        <LabeledInput id="last-name" name="lastName" label="Last Name" type="text" />
      </div>
      <div className="sm:col-span-3">
        <LabeledInput id="date-of-birth" name="dateOfBirth" label="Date of Birth" type="text" />
      </div>
      <div className="sm:col-span-3">
        <LabeledInput id="start-date" name="startDate" label="Start Date" type="text" />
      </div>
      <div className="col-span-full">
        <LabeledInput id="street" name="street" label="Street" type="text" />
      </div>
      <div className="sm:col-span-2 sm:col-start-1">
        <LabeledInput id="city" name="city" label="City" type="text" />
      </div>
      <div className="sm:col-span-2">
        <LabeledSelect  id="state" name="state" label="State" />
      </div>
      <div className="sm:col-span-2">
        <LabeledInput id="zip-code" name="zipCode" label="Zip Code" type="number" />
      </div>
      <div className="sm:col-span-3">
        <LabeledSelect id="department" name="department" label="Department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </LabeledSelect>
      </div>
    </FormSection>
  );
}

export default EmployeeForm;
