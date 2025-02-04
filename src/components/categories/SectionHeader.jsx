import React from "react";

const SectionHeader = ({ title, buttonText, onClick }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold text-black font-Inter">{title}</h2>
      {buttonText && (
        <button
          onClick={onClick}
          className="px-6 py-3 text-black font-semibold font-Inter bg-customBlue rounded-lg shadow hover:bg-customBlue transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
