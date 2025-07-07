import { useEffect, useState } from "react";
import Filter from "./Filter";
import JobList from "./JobList";
import { fetchJobs } from "../api/jobApi";

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    salaryRange: [3, 20], // LPA range
  });

  // Fetch jobs with retry
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error("❌ Failed to fetch jobs:", error);
      }
    };
    loadJobs();
  }, []);

  // Apply filters
  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(filters.search.toLowerCase());
      const locationMatch = filters.location ? job.location === filters.location : true;
      const jobTypeMatch = filters.jobType ? job.workMode === filters.jobType : true;

      const salaryNumber = parseInt(job.salary); // from "10 LPA" → 10
      const salaryMatch =
        !isNaN(salaryNumber) &&
        salaryNumber >= filters.salaryRange[0] &&
        salaryNumber <= filters.salaryRange[1];

      return titleMatch && locationMatch && jobTypeMatch && salaryMatch;
    });

    setFilteredJobs(filtered);
  }, [filters, jobs]);

  return (
    <>
      <Filter filters={filters} setFilters={setFilters} />
      <JobList jobs={filteredJobs} />
    </>
  );
}
