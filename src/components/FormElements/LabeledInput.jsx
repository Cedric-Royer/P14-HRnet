import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LabeledInput({ label, id, name, type, value, onChange }) {
  const commonInputClasses =
    "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6";

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const InputField =
    type === "date" ? (
      <DatePicker
        id={id}
        name={name}
        selected={value}
        onChange={onChange}
        className={commonInputClasses}
        dateFormat="MM/dd/yyyy"
        placeholderText="MM/DD/YYYY"
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
    ) : (
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={commonInputClasses}
        onKeyDown={handleKeyDown}
      />
    );

  return (
    <>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">{InputField}</div>
    </>
  );
}

export default LabeledInput;
