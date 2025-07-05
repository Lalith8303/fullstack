import { MapPinIcon, UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Filter({ filters, setFilters }) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white py-4 px-6 rounded-xl shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4">

        {/* Search Input */}
        <div className="relative w-60">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute top-2.5 left-3" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="pl-10 pr-4 py-2 rounded w-full text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-transparent shadow-sm"
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
          />
        </div>

        {/* Separator */}
        <div className="h-8 w-px bg-gray-300 mx-2" />

        {/* Location Dropdown */}
        <div className="relative w-48">
          <MapPinIcon className="h-5 w-5 text-gray-500 absolute top-2.5 left-3" />
          <select
            value={filters.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="pl-10 pr-4 py-2 rounded w-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-transparent shadow-sm"
          >
            <option value="">Preferred Location</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        {/* Separator */}
        <div className="h-8 w-px bg-gray-300 mx-2" />

        {/* Job Type Dropdown */}
        <div className="relative w-48">
          <UserIcon className="h-5 w-5 text-gray-500 absolute top-2.5 left-3" />
          <select
            value={filters.jobType}
            onChange={(e) => handleChange("jobType", e.target.value)}
            className="pl-10 pr-4 py-2 rounded w-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-transparent shadow-sm"
          >
            <option value="">Job Type</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Separator */}
        <div className="h-8 w-px bg-gray-300 mx-2" />

        {/* Salary Range (3LPA - 20LPA) */}
        <div className="flex flex-col gap-1 text-sm text-gray-700 w-64">
          <label className="font-medium">
            Salary Per Annum ₹{filters.salaryRange[0]}LPA - ₹{filters.salaryRange[1]}LPA
          </label>
          <input
            type="range"
            min={3}
            max={20}
            step={1}
            value={filters.salaryRange[1]}
            onChange={(e) =>
              handleChange("salaryRange", [filters.salaryRange[0], parseInt(e.target.value)])
            }
            className="accent-black h-1 rounded w-full"
          />
        </div>
      </div>
    </div>
  );
}
