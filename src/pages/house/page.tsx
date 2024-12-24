import React from "react";
import { houses } from "./houses"; // Importing the array from houses.ts

const HouseDetailsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Available Properties
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {houses.map((house) => (
          <div key={house.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={house.image}
              alt={house.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{house.name}</h2>
              <p className="text-gray-600 mt-2">{house.description}</p>
              <p className="text-gray-700 mt-4">
                <strong>Location:</strong> {house.location}
              </p>
              <p className="text-gray-700">
                <strong>Type:</strong> {house.type}
              </p>
              <p className="text-gray-700">
                <strong>Topography:</strong> {house.topography}
              </p>
              <p className="text-gray-900 font-semibold mt-4 text-lg">
                Price: {house.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseDetailsPage;
