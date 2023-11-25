// src/components/SecondScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import partsData from "../partsData";

import { usePartsContext } from "../contexts/PartsContext";



const SelectParts = () => {
  //   const [selectedParts, setSelectedParts] = useState([]);

  const { selectedParts, addSelectedPart, removeSelectedPart } =
    usePartsContext();
  const navigate = useNavigate();

  //   const handlePartSelection = (partId) => {
  //     // Toggle part selection
  //     setSelectedParts((prevSelectedParts) => {
  //       if (prevSelectedParts.includes(partId)) {
  //         return prevSelectedParts.filter((id) => id !== partId);
  //       } else {
  //         return [...prevSelectedParts, partId];
  //       }
  //     });
  //     console.log(selectedParts, "selectedParts")
  //   };

  const handlePartSelection = (part) => {
    // Toggle part selection using context functions
    if (selectedParts.includes(part)) {
      removeSelectedPart(part);
    } else {
      addSelectedPart(part);
    }
  };

  const navigateToThirdScreen = () => {
    // Navigate to the third screen with selected parts
    navigate("/assemble-parts");
  };

  const isSelected = (id) => {
    const results = selectedParts.find((i) => i.id === id);
    if (results) {
      return true;
    }
    return false;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Choose Parts</h2>
      <div className="container p-4 border border-black h-full shadow-md flex items-center overflow-x-auto">
        <div className="flex">
          {/* overflow-x-auto */}
          {partsData.map((part) => (
            <div
              key={part.id}
              className="flex-shrink-0 m-2 bg-white rounded-lg overflow-hidden"
            >
              <img
                src={part.image}
                alt={part.name}
                className="w-80 h-52 object-cover"
              />
              <p className="text-center">{part.name}</p>
              <input
                type="checkbox"
                checked={isSelected(part.id)}
                onChange={() => handlePartSelection(part)}
                className="m-2"
              />
            </div>
          ))}
        </div>
      </div>
        <button
          onClick={navigateToThirdScreen}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        >
          Proceed to Assembly
        </button>
    </div>
  );
};

export default SelectParts;
