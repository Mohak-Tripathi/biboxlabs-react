// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImage from '../assests/ProjectImage.jpg'

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToSecondPage = () => {
    navigate('/select-parts');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        {/* Big image of a computer and its accessories */}
        <img
          src={HeroImage} 
          alt="Computer and Accessories"
          className="w-2/3"
        />

        {/* Product description */}
        <div className="ml-4">
          <h2 className="text-2xl font-bold mb-4">Build Your Own Computer</h2>
          <p className="text-lg font-bold mb-4">
          Product Description: "TechMaster Pro PC Bundle"
          </p>
  
          <div className="container mx-auto p-4">
      <h3 className="text-lg font-semibold mb-2">Product Description: <span className="text-blue-500">"TechMaster Pro PC Bundle"</span></h3>

      <div>
        <p className="mb-4">Overview: Welcome to the future of computing with our TechMaster Pro PC Bundle. This comprehensive package includes everything you need to elevate your computing experience. Unleash the power of cutting-edge technology with a carefully curated selection of high-performance components.</p>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>TechMaster Pro Desktop:</strong> The heart of your setup, the TechMaster Pro desktop boasts powerful processing capabilities, ensuring smooth multitasking and seamless performance. With the latest generation processors, your computing tasks are handled effortlessly.
          </li>
          <li>
            <strong>UltraFast SSD Storage:</strong> Say goodbye to slow load times. Our PC bundle comes equipped with ultra-fast SSD storage, providing quick boot times and rapid access to your applications and files. Experience a new level of speed and responsiveness.
          </li>
       
        </ul>
      </div>


      <div>
      
        <p className="italic">TechMaster - Redefining the Future of Computing.</p>
      </div>
    </div>
  
          <button
            onClick={navigateToSecondPage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Start Building
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

