import React from "react";

const Error = ({ errorMsg, retryApiCall }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-red-50">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Error"
          className="w-40 h-40"
        />
        <h1 className="text-3xl font-bold text-red-600 mt-4 text-center">
          Oops! Something went wrong
        </h1>
        <p className="text-lg text-gray-700 mt-2 text-center px-4">{errorMsg}</p>
        <button
          onClick={retryApiCall}
          className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
