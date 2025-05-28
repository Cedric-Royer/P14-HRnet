import PropTypes from "prop-types";
import { commonInputClasses } from "../../utils/inputClasses";

function LabeledTextInput({ label, id, name, value, onChange, type = "text", ...props }) {

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
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={commonInputClasses}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </div>
    </>
  );
}

LabeledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default LabeledTextInput;
