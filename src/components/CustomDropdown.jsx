import React, { useState } from "react";
import DropDown from "../svg components/DropDown";

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredOption, setHoveredOption] = useState(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (option) => {
    console.log("Selected option:", option);
    onChange(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search or Select"
        className="block md:w-full px-4 py-2 border-[1.5px] border-[#CEE1FC] rounded-lg focus:outline-none"
        onClick={handleArrowClick}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center md:px-2 px-40 cursor-pointer"
        onClick={handleArrowClick}
      >
        <DropDown isOpen={isOpen}/>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border rounded-md mt-1">
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 cursor-pointer ${hoveredOption === option ? 'bg-[#E0E0E0] text-primary' : 'hover:bg-[#E0E0E0] text-paragraph'}`}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
