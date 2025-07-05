// src/components/CustomDropdown.js
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function CustomDropdown({ icon: Icon, placeholder, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-60">
      <div
        className="flex items-center justify-between gap-2 px-4 py-2 rounded cursor-pointer bg-white shadow-sm"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-gray-500" />
          <span className={`text-sm ${selected ? "text-gray-800" : "text-gray-500"}`}>
            {selected || placeholder}
          </span>
        </div>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </div>

      {open && (
        <div className="absolute mt-1 bg-white rounded shadow-md z-10 w-full">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
