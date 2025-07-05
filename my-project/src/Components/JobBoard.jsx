import { useState, useEffect } from "react";
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
    salaryRange: [0, 100],
  });

  useEffect(() => {
    fetchJobs().then((res) => {
      setJobs(res.data);
      setFilteredJobs(res.data);
    });
  }, []);

  const applyFilters = () => {
    const filtered = jobs.filter((job) => {
      const searchMatch = job.title.toLowerCase().includes(filters.search.toLowerCase());
      const locationMatch = filters.location ? job.location === filters.location : true;
      const typeMatch = filters.jobType ? job.jobType === filters.jobType : true;
      const salaryNum = parseInt(job.salary);
      const salaryMatch =
        salaryNum >= filters.salaryRange[0] && salaryNum <= filters.salaryRange[1];

      return searchMatch && locationMatch && typeMatch && salaryMatch;
    });

    setFilteredJobs(filtered);
  };

  return (
    <div>
      <Filter filters={filters} setFilters={setFilters} onSearch={applyFilters} />
      <JobList jobs={filteredJobs} />
    </div>
  );
}
