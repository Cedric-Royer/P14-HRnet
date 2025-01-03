import LabeledSelect from "./FormElements/LabeledSelect"
import LabeledInput from "./FormElements/LabeledInput";

function Example() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Form submitted!"); 
      };

  return (
    <form 
        onSubmit={handleSubmit}
        className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
        action="#"
        id="create-employee"
    >
      <div className="space-y-3">
      <h2 className="text-base/7 font-semibold text-gray-900">Create Employee</h2>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                <LabeledSelect name="state" id="state" label="State" ></LabeledSelect>
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
          </div>

        </div>

        <div className="border-b border-gray-900/10 pb-12">
        </div>
      </div>



      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default Example
