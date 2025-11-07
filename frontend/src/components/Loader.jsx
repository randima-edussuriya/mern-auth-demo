import React from "react";

function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex items-center justify-center h-screen"
    >
      <div className="animate-spin rounded-full h-14 w-14 border-4 border-gray-300 border-t-blue-600"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loader;
