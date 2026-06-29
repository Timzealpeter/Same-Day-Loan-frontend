import { useState, useEffect } from "react";
import api from "../lib/axios";
import Navbar from "../components/Navbar/Navbar";
import DetailNotFound from "../components/DetailNotFound"; // Fixed: Capitalized component name
import DetailCard from "../components/DetailCard"; // Fixed: Capitalized component name

const AdminPage = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await api.get("/details");
        console.log("Response data:", res.data);

        // Check if response data is an array
        if (Array.isArray(res.data)) {
          setDetails(res.data);
        } else if (res.data && Array.isArray(res.data.details)) {
          // If your API returns { details: [...] }
          setDetails(res.data.details);
        } else {
          console.error("Unexpected response format:", res.data);
          setError("Unexpected data format from server");
        }
      } catch (error) {
        console.error("Error fetching details:", error);
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to fetch details",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  // Show error message if there's an error
  if (error) {
    return (
      <div className="App">
        <Navbar />
        <div className="container mx-auto p-4 mt-6">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error!</h4>
            <p>{error}</p>
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />

      <div className="container mx-auto p-4 mt-6" style={{ maxWidth: "80rem" }}>
        {loading && (
          <div className="text-center text-primary py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="mt-2">Loading details....</div>
          </div>
        )}

        {!loading && details.length === 0 && <DetailNotFound />}

        {!loading && details.length > 0 && (
          <div className="row g-4">
            {details.map((detail) => (
              <div key={detail._id} className="col-12 col-md-6 col-lg-4">
                <DetailCard detail={detail} setDetails={setDetails} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
