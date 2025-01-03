import React from "react";
import LabeledInput from "./FormElements/LabeledInput";
import LabeledSelect from "./FormElements/LabeledSelect";
import FormSection from "./FormSection";

function EmployeeForm() {
  return (
    <FormSection title="Create Employee">
      <div className="sm:col-span-3">
        <LabeledInput id="first-name" label="First Name" type="text" />
      </div>
      <div className="sm:col-span-3">
        <LabeledInput id="last-name" label="Last Name" type="text" />
      </div>
      <div className="sm:col-span-3">
        <LabeledInput id="date-of-birth" label="Date of Birth" type="text" />
      </div>
      <div className="sm:col-span-3">
        <LabeledInput id="start-date" label="Start Date" type="text" />
      </div>
      <div className="col-span-full">
        <LabeledInput id="street" label="Street" type="text" />
      </div>
      <div className="sm:col-span-2 sm:col-start-1">
        <LabeledInput id="city" label="City" type="text" />
      </div>
      <div className="sm:col-span-2">
        <LabeledSelect name="state" id="state" label="State" />
      </div>
      <div className="sm:col-span-2">
        <LabeledInput id="zip-code" label="Zip Code" type="number" />
      </div>
      <div className="sm:col-span-3">
        <LabeledSelect id="department" label="Department">
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
