import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-light border-bottom border-secondary-subtle">
      <div
        className="container mx-auto py-3 px-4"
        style={{ maxWidth: "72rem" }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="display-6 fw-bold text-primary font-monospace tracking-tight">
            Admin
          </h1>

          <div className="d-flex align-items-center gap-3">
            <Link
              to={"/"}
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <FaArrowLeft size={20} /> <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
