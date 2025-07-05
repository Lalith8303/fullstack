import CustomDropdown from "./CustomDropDown";
import LocationDropdown from "./LocationDropDown";
import { UserIcon } from "@heroicons/react/24/solid";
import SalarySlider from "./SalaryRangeSlider";

export default function Filter() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center divide-x gap-4">
        {/* Search */}
       <div className="px-4 flex items-center">
  <input
    type="text"
    placeholder="🔍︎  Search By Job Title, Role"
    className="border-none px-4 py-2 rounded w-60 outline-none"
  />
</div>


        {/* Location */}
        <div className="px-4 flex items-center">
          <LocationDropdown />
        </div>

        {/* Job Type */}
        <div className="px-4 flex items-center">
          <CustomDropdown
            icon={UserIcon}
            placeholder="Job Type"
            options={["Full-time", "Part-time", "Internship"]}
          />
        </div>

        {/* Salary Range */}
        <div className="px-4 flex items-center">
          <SalarySlider />
        </div>
      </div>
    </div>
  );
}
