import { Link } from "react-router-dom";
import { formatDateTime } from "../lib/utils";

const detailCard = ({ detail }) => {
  return (
    <Link
      to={`/${detail._id}`}
      className="card bg-light shadow-sm hover:shadow-lg transition-all duration-200 border-top border-4 border-success"
      style={{ textDecoration: "none", borderColor: "#00ff9d" }}
    >
      <div className="card-body ">
        <h3 className="card-title text-dark">{detail.email}</h3>
        <p
          className="text-secondary"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {detail.password}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="small text-secondary">
            {formatDateTime(detail.createdAt)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default detailCard;
