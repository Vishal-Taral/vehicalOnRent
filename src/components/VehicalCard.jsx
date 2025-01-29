import React from "react";

const VehicalCard = ({ vehicalData, openPopup }) => {
  return (
    <div
      onClick={openPopup}
      className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
    >
      <img
        src={vehicalData.img}
        alt={vehicalData.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{vehicalData.name}</h3>
        <p className="text-gray-600">{vehicalData.version}</p>
        <p className="text-gray-800 font-bold mt-2">
          ${vehicalData.pricePerHour || "N/A"} / hour
        </p>
      </div>
    </div>
  );
};

export default VehicalCard;
