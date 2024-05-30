'use client'

import { GiCancel } from "react-icons/gi";


const FilterIndicators = ({ selectedValues, clearSelectedValue }) => {
  if (selectedValues.length === 0) return null;

  return (
    <div className="flex flex-wrap mb-4">
      {selectedValues.map((value, index) => (
        <div key={index} className="flex items-center m-1 px-3 py-1 bg-primary text-white rounded-full font-semibold">
          <span className="mr-2">{value}</span>
          <GiCancel 
            className="h-4 w-4 cursor-pointer" 
            onClick={() => clearSelectedValue(value)} 
          />
        </div>
      ))}
    </div>
  );
}

export default FilterIndicators;
