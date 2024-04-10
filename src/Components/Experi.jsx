import React, { useState } from 'react';

function Experi() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-32 bg-gray-200 border border-gray-300 rounded-md p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl font-bold">Banner Title</h2>
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 text-white p-4 flex justify-center items-center">
          <p>Additional information about the banner</p>
        </div>
      )}
    </div>
  );
}
export default Experi
