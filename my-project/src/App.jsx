import TopNav from "./Components/TopNav";
import { useState } from "react";
import CreateJobModal from "./Components/CreateJobModal";
import JobBoard from "./Components/JobBoard"; // ✅ Import the JobBoard
import JobList from "./Components/JobList";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCreateJobClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <TopNav onCreateJobClick={handleCreateJobClick} />

      {showModal && (
        <CreateJobModal
          onClose={handleCloseModal}
          onSubmit={(data) => {
            console.log("New Job Posted:", data);
            setShowModal(false);
            // ✅ Optionally trigger refresh from JobBoard via context or props
          }}
        />
      )}

      {/* Main Job UI */}
      <JobBoard/>
    </>
  );
}
