// src/api/jobApi.js
import axios from "axios";

const API = axios.create({ baseURL: "https://fullstack-2qpr.onrender.com/api" });

export const fetchJobs = () => API.get("/jobs");
export const createJob = (jobData) => API.post("/jobs", jobData);
