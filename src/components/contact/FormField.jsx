const FormField = ({ label, type = "text", placeholder, id, options }) => {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="text-sm font-medium text-gray-500">
          {label}
        </label>
        {type === "select" ? (
          <select
            id={id}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:ring-gray-200"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:ring-gray-200"
          />
        )}
      </div>
    );
  };
  
  export default FormField;
  