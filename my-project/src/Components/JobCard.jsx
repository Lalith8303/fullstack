export default function JobCard({ job }) {
  return (
    <div className="border-2 border-gray-100 p-4 rounded-2xl shadow hover:shadow-lg relative flex flex-col h-full">
      {/* Posted Time */}
      <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
        {job.postedAgo}
      </span>

      {/* Logo */}
      <div className="w-12 h-12 mb-3">
        <img src={job.companyLogo} alt="Logo" className="rounded" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold">{job.title}</h2>

      {/* Info Row */}
      <div className="flex items-center text-sm text-gray-600 mt-1 gap-2 flex-wrap">
        <span>👨‍💻 {job.experience}</span>
        <span>📍 {job.workMode}</span>
        <span>💰 {job.salary}</span>
      </div>

      {/* Description */}
      <ul className="text-sm text-gray-500 mt-2 mb-2 list-disc ml-5 flex-grow">
        {job.description.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>

      {/* Button */}
      <a
        href={job.applyLink}
        className="bg-blue-500 text-white text-center mt-auto py-2 rounded-xl hover:bg-blue-600 transition"
      >
        Apply Now
      </a>
    </div>
  );
}
