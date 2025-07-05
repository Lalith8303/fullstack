import { useState } from 'react';

const SalarySlider = () => {
  const [value, setValue] = useState(50); // default ₹50k

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">Salary Per Month</label>
        <span className="text-sm font-medium text-gray-700">₹{value}k</span>
      </div>

      {/* Input Range */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full appearance-none"
        style={{
          background: `linear-gradient(to right, black ${value}%, #d1d5db ${value}%)`,
          height: '6px',
          borderRadius: '9999px',
          outline: 'none',
        }}
      />

      {/* Thumb styling */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 20px;
          width: 20px;
          background: black;
          border-radius: 50%;
          border: 4px solid white;
          cursor: pointer;
          margin-top: -7px;
          z-index: 10;
          position: relative;
        }

        input[type='range']::-moz-range-thumb {
          height: 20px;
          width: 20px;
          background: black;
          border-radius: 50%;
          border: 4px solid white;
          cursor: pointer;
          z-index: 10;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default SalarySlider;
