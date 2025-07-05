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

  useEffect(() => {
    fetchJobs().then((res) => {
      setJobs(res.data);
      setFilteredJobs(res.data);
    });
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(filters.search.toLowerCase());
      const locationMatch = filters.location ? job.location === filters.location : true;
      const jobTypeMatch = filters.jobType ? job.workMode === filters.jobType : true;

      const salaryNumber = parseInt(job.salary); // "10 LPA" → 10
      const salaryMatch =
        salaryNumber >= filters.salaryRange[0] &&
        salaryNumber <= filters.salaryRange[1];

      return titleMatch && locationMatch && jobTypeMatch && salaryMatch;
    });

    setFilteredJobs(filtered);
  }, [filters, jobs]); // 👈 Runs every time filter changes

  return (
    <>
      <Filter filters={filters} setFilters={setFilters} />
      <JobList jobs={filteredJobs} />
    </>
  );
}
