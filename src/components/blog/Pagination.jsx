import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`px-4 py-2 rounded-md ${
              currentPage === pageNumber
                ? "bg-gray-200 text-black font-bold"
                : "bg-gray-200 text-black hover:bg-white"
            } transition`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-black"
        } text-black transition`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ...
      </button>
    </div>
  );
};

export default Pagination;
