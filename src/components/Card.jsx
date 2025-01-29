import React from "react";

const Temp = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 px-12">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <img
            src={item?.img}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">{item?.name}</h2>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <p className="text-gray-600 mt-1">{`category: ${item?.category}`}</p>
            <p className="text-gray-600 mt-1">{`Price: ${item?.price}`}</p>
            <p className="text-gray-600 mt-1">{`Availble: ${item.available}`}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              {item.category === "car" ? "Book your car" : "Book your bike"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Temp;
