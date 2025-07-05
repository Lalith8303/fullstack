// models/Job.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    companyLogo: { type: String, required: true },
    experience: { type: String, required: true },
    workMode: {
      type: String,
      enum: ["Onsite", "Remote", "Hybrid"],
      required: true
    },
    salary: { type: String, required: true }, // e.g., "18 LPA"

    // ✅ New Location Field
    location: {
      type: String,
      enum: ["Chennai", "Bangalore", "Hyderabad"],
      required: true
    },

    description: { type: [String], required: true }, // array of strings
    postedAgo: { type: String, required: true }, // e.g., "2d Ago"
    applyLink: { type: String, required: true }
  },
  {
    timestamps: true // adds createdAt and updatedAt
  }
);

export default mongoose.model("Job", jobSchema);
