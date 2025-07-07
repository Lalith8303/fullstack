// src/api/jobApi.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://fullstack-2qpr.onrender.com/api",
});

// Retry-enabled fetchJobs function
export const fetchJobs = async (retry = 1) => {
  try {
    const res = await API.get("/jobs");
    return res.data;
  } catch (err) {
    if (retry <= 3) {
      // Wait 3 seconds before retrying
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return fetchJobs(retry + 1);
    } else {
      throw err;
    }
  }
};

export const createJob = (jobData) => API.post("/jobs", jobData);
