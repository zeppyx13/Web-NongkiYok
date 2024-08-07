import React from "react";

const CardPlace = ({src,title, desc}) => {
  return (
    <div className="w-[319px] bg-white rounded-lg shadow-md p-6 flex flex-col items-center m-10 
    drop-shadow-2xl border-2 border-color-gold-card justify-center"> 
      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 ">
        <img 
          src={src}
          alt="Heart Icon"
          className="w-10 h-[auto] "
        />
      </div>
      <h1 className="text-3xl mb-2 kodchasan-bold">{title}</h1> 
      <p className="text-gray-600 jura-medium">{desc}</p>
    </div>

    
  );
};

export default CardPlace;