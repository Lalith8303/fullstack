import { useState } from "react";
import axios from "axios";

const initialForm = {
  title: "",
  company: "",
  companyLogo: "",
  experience: "",
  workMode: "Onsite",
  salary: "",
  location: "", // ✅ Added
  description: "",
  postedAgo: "",
  applyLink: ""
};

export default function CreateJobModal({ onClose, onJobCreated }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      ...form,
      description: form.description.split("\n"),
      companyLogo: form.companyLogo || "https://via.placeholder.com/150",
      postedAgo: "Just now",
      applyLink: "#"
    };

    try {
      const res = await axios.post("http://localhost:5000/api/jobs", jobData);
      console.log("✅ Job created:", res.data);
      setForm(initialForm);
      if (onJobCreated) onJobCreated(res.data);
      onClose();
    } catch (error) {
      console.error("❌ Failed to create job:", error.response?.data || error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4">Create Job Opening</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title & Company */}
          <div className="flex gap-4">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={form.title}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded"
              required
            />
          </div>

          {/* Experience & Work Mode */}
          <div className="flex gap-4">
            <input
              type="text"
              name="experience"
              placeholder="e.g. 2-4 yr Exp"
              value={form.experience}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded"
              required
            />
            <select
              name="workMode"
              value={form.workMode}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded"
              required
            >
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Salary */}
          <input
            type="text"
            name="salary"
            placeholder="e.g. 12 LPA"
            value={form.salary}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* ✅ Location Dropdown */}
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Job Location</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>

          {/* Logo URL */}
          <input
            type="text"
            name="companyLogo"
            placeholder="Company Logo URL (optional)"
            value={form.companyLogo}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {/* Description */}
          <textarea
            name="description"
            rows="4"
            placeholder="Write job responsibilities, each on a new line"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="border px-6 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Publish »
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
