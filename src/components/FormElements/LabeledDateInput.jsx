import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { commonInputClasses } from "../../utils/inputClasses";

function LabeledDateInput({ label, id, name, value, onChange, ...props }) {

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
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
          {...props}
        />
      </div>
    </>
  );
}

LabeledDateInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

export default LabeledDateInput;
