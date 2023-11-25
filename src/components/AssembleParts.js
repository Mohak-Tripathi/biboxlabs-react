

import React, { useEffect, useState } from "react";
import { usePartsContext } from "../contexts/PartsContext";
// import partsData from "../partsData";
import {useDrag, useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";


const Image = ({ part }) => {
  const [, drag] = useDrag({
    type: "IMAGE",
    item: { ...part },
  });

  return (
    <div className="p-2">
      <img ref={drag} src={part.image} alt="img" />
      <p className="w-fit mx-auto">{part.name}</p>
    </div>
  );
};

const DropBox = ({ onDrop, droppedImages }) => {
  const [, drop] = useDrop({
    accept: "IMAGE",
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} className="border-2 p-6 border-gray-200 shadow-md h-full">
      <h1 className="text-center font-bold text-2xl">Drop Image Here</h1>
      <div className="grid grid-cols-3 gap-4">
        {droppedImages.map((image, idx) => (
          <img
            src={image.image}
            key={idx}
            alt="dropped image"
            className="w-40 aspect-square"
          />
        ))}
      </div>
    </div>
  );
};

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <Image key={index} image={image} />
      ))}
    </div>
  );
};

const AssembleParts = () => {
  const [droppedImages, setDroppedImages] = useState([]);
  const { selectedParts, addSelectedPart, removeSelectedPart } =
    usePartsContext();

    const navigate = useNavigate()

  useEffect(() => {
    const droppedParts = JSON.parse(
      localStorage.getItem("droppedImages")
    );
    if (droppedParts) {
        setDroppedImages(droppedParts);
    }
  }, []);


  const navigateToFourthScreen = () => {
    // Navigate to the third screen with selected parts
    navigate("/final-product");
  };

  const handleDrop = (image) => {
    if (droppedImages.find((item) => item.id === image.id)) {
      return;
    }
    const dropped = [...droppedImages, image];
    setDroppedImages(dropped);
    localStorage.setItem("droppedImages", JSON.stringify(dropped));
  };

  return (
    <div className="p-6">
    <div className="flex gap-5 p-6 h-[96vh] items-stretch">
      <div className="border border-green overflow-y-scroll flex flex-col gap-4 w-[25%]">
        {selectedParts.map((item, idx) => (
          <Image part={item} key={idx} />
        ))}
      </div>
      <div className="w-full">
        <DropBox onDrop={handleDrop} droppedImages={droppedImages} />
      </div>
     
    </div>
     <button
       onClick={navigateToFourthScreen}
       className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
     >
       Proceed to Final Product
     </button>
     </div>
  );
};

export default AssembleParts;
