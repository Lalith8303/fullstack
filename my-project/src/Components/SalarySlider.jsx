// SalaryRangeSlider.jsx
const SalarySlider = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">Salary (Max)</label>
        <span className="text-sm font-medium text-gray-700">{value} LPA</span>
      </div>

      <input
        type="range"
        min="3"
        max="20"
        step="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full appearance-none"
        style={{
          background: `linear-gradient(to right, black ${(value - 3) * 5.88}%, #d1d5db ${(value - 3) * 5.88}%)`,
          height: '6px',
          borderRadius: '9999px',
          outline: 'none',
        }}
      />

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
