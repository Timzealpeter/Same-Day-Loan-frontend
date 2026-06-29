import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const detailNotFound = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center py-5 gap-4 mx-auto text-center"
      style={{ maxWidth: "28rem" }}
    >
      <div className="bg-primary bg-opacity-10 rounded-circle p-4">
        <FaBook size={40} className="text-primary" />
      </div>
      <h3 className="h2 fw-bold">No details yet</h3>
      <p className="text-secondary">
        Ready to organize your thought? Create your first note to get started on
        your journey.
      </p>
      <Link to={"/create"} className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};

export default detailNotFound;
