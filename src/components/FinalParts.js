

import React, { useEffect, useState } from "react";
import partsData from "../partsData";


const FinalParts = () => {
  const [finalData, setFinalData] = useState([]);
 

  useEffect(() => {
    const droppedImages = JSON.parse(
      localStorage.getItem("droppedImages")
    );
    console.log(droppedImages, "droppedImages")
    if (droppedImages) {
      
        setFinalData(droppedImages);
    }
  }, [partsData]);



  return (
    <div>

       <h1 className="text-center font-bold text-2xl">Final Assembled Part (Choosen By User)</h1>
     
      <div className="container mx-auto mt-8 p-4 h-auto w-full lg:w-2/3 xl:w-1/2 border border-grey shadow-md">
  <div className="flex flex-wrap -mx-2">
    {finalData.map((image, idx) => (
      <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
        <img
          src={image.image}
          alt="final image"
          className="w-full h-auto aspect-square object-cover"
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default FinalParts;

