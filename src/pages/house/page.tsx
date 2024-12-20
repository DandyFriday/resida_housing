import React from "react";
import { useParams, useNavigate } from "react-router-dom";


export const houses = [
    {
      id: 1,
      name: "Oakwood Villa",
      location: "Downtown, Springfield",
      type: "Apartment",
      topography: "Urban",
      price: "$1200/month",
      image: "/images/oakwood-villa.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 2,
      name: "Hilltop Bungalow",
      location: "Hillcrest, Greenfield",
      type: "Bungalow",
      topography: "Hilly",
      price: "$1500/month",
      image: "/images/hilltop-bungalow.jpg", 
      description: "A cozy villa in the heart of Springfield, perfect for small families.",     

    },
    {
      id: 3,
      name: "Sunnyvale Duplex",
      location: "Sunnyvale, Lakeside",
      type: "Duplex",
      topography: "Flat",
      price: "$1000/month",
      image: "/images/sunnyvale-duplex.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 4,
      name: "Meadow Retreat",
      location: "Countryside, Riverbend",
      type: "Cottage",
      topography: "Rural",
      price: "$800/month",
      image: "/images/meadow-retreat.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 5,
      name: "City Heights Apartment",
      location: "Downtown, Cityville",
      type: "Apartment",
      topography: "Urban",
      price: "$1300/month",
      image: "/images/city-heights.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 6,
      name: "Lakeside Residence",
      location: "Shoreline, Lakeside",
      type: "Townhouse",
      topography: "Waterside",
      price: "$1100/month",
      image: "/images/lakeside-residence.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 7,
      name: "Pinecrest Villa",
      location: "Mountainview, Hillcrest",
      type: "Villa",
      topography: "Mountainous",
      price: "$1700/month",
      image: "/images/pinecrest-villa.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 8,
      name: "Suburban Haven",
      location: "Suburbia, Northfield",
      type: "Duplex",
      topography: "Flat",
      price: "$900/month",
      image: "/images/suburban-haven.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 9,
      name: "Cliffside Retreat",
      location: "Edgeview, Cliffside",
      type: "Bungalow",
      topography: "Cliffside",
      price: "$1400/month",
      image: "/images/cliffside-retreat.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 10,
      name: "Garden View Villa",
      location: "Greenwich, Meadowfield",
      type: "Villa",
      topography: "Rural",
      price: "$1600/month",
      image: "/images/garden-view.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 11,
      name: "Downtown Loft",
      location: "City Center, Metropolis",
      type: "Loft",
      topography: "Urban",
      price: "$1800/month",
      image: "/images/downtown-loft.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 12,
      name: "Harbor Breeze Apartment",
      location: "Seaside, Harborview",
      type: "Apartment",
      topography: "Coastal",
      price: "$950/month",
      image: "/images/harbor-breeze.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 13,
      name: "Sunset Boulevard Home",
      location: "Boulevard, Westend",
      type: "Townhouse",
      topography: "Suburban",
      price: "$1200/month",
      image: "/images/sunset-boulevard.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 14,
      name: "Riverside Cabin",
      location: "Riverside, Willowbrook",
      type: "Cabin",
      topography: "Waterside",
      price: "$700/month",
      image: "/images/riverside-cabin.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
    {
      id: 15,
      name: "Skyline Penthouse",
      location: "Uptown, Highrise District",
      type: "Penthouse",
      topography: "Urban",
      price: "$2500/month",
      image: "/images/skyline-penthouse.jpg",
      description: "A cozy villa in the heart of Springfield, perfect for small families.",
    },
  ];

  const HouseDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
  
    const house = houses.find((house) => house.id === Number(id));
  
    if (!house) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <p className="text-xl text-gray-800">Property not found.</p>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-5">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Back
        </button>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={house.image}
            alt={house.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">{house.name}</h1>
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
      </div>
    );
  };
  
  export default HouseDetailsPage;
  