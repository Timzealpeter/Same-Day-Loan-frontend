import { useState } from "react";
import "./LoanRequest.scss";
import AuthModal from "../AuthModal/AuthModal";
import sameDayLoan from "../../assets/sameDayLoan.png";

const LoanRequest = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAmountSelect = (amount) => {
    setLoanAmount(amount);
  };

  return (
    <div
      className="loan-page-wrapper bg-light min-vh-100 d-flex flex-column align-items-center py-4"
      id="LoanRequest"
    >
      {/* Header Logo */}
      <header className="mb-2 text-center">
        <img src={sameDayLoan} alt="same Day Loan" style={{ width: "150px" }} />
      </header>

      {/* Main Container */}
      <main className="container container-custom bg-white shadow-sm rounded-3 overflow-hidden p-0">
        <div className="row g-0">
          {/* Left Column: Marketing Info */}
          <div className="col-lg-6 marketing-sidebar d-flex flex-column justify-content-between text-white p-4 p-md-5 position-relative">
            <div className="sidebar-content z-1">
              <span className="fs-6 opacity-75 d-block mb-1">
                Fast funding process made easy.
              </span>
              <h1 className="fw-bold mb-4 h2">
                Cash deposited directly to your bank.
              </h1>

              <ul className="list-unstyled marketing-list mb-5">
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-lg me-2"></i> All credit types
                  considered
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-lg me-2"></i> Fast and secure
                  process
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-lg me-2"></i> Connect with the top
                  lenders
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-lg me-2"></i> No hidden fees
                </li>
              </ul>
            </div>

            {/* Stats Footer inside Sidebar */}
            <div className="row g-3 sidebar-stats pt-4 border-top border-white border-opacity-25 z-1">
              <div className="col-6">
                <h3 className="fw-bold m-0">2M+</h3>
                <small className="opacity-75 text-wrap d-block">
                  More than 2 million yearly requests
                </small>
              </div>
              <div className="col-6">
                <h3 className="fw-bold m-0">7k+</h3>
                <small className="opacity-75 text-wrap d-block">
                  Weekly users connected to lenders
                </small>
              </div>
            </div>

            {/* Injected Cutout Image Layer */}
            <div className="sidebar-bg-image-container">
              <img
                src="https://img.emlasts.com/funnel/v1/img/AEF/main-img.png"
                alt="Happy couple looking at documents"
                className="sidebar-bg-image"
              />
            </div>
          </div>

          {/* Right Column: Form Section */}
          <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">
            <span className="text-muted d-block mb-1 fs-6">
              Start with your desired
            </span>
            <h2 className="fw-bold mb-4 h3">
              Loan amount{" "}
              <span
                className="text-primary fs-5 cursor-pointer"
                title="More information"
              >
                ?
              </span>
            </h2>

            {/* Success Banner */}
            <div className="alert alert-light border d-flex align-items-start p-3 mb-4 rounded-3 text-start">
              <div className="success-icon-box me-3 p-2 bg-white border rounded">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d6efd"
                  strokeWidth="1.5"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z" />
                </svg>
              </div>
              <div>
                <p className="m-0 text-muted small">
                  With a{" "}
                  <strong className="text-primary">96% success rate</strong>,
                  we're confident we can connect you with a lender.
                </p>
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-4">
              <div className="input-group input-group-lg border rounded-3 overflow-hidden">
                <span className="input-group-text bg-white border-0 text-muted">
                  $
                </span>
                <input
                  type="number"
                  className="form-control border-0 shadow-none ps-1"
                  placeholder="Enter how much"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Quick Select Options */}
            <p className="text-muted small mb-3">
              Or choose a common amount below:
            </p>
            <div className="row g-2 mb-4">
              <div className="col-4">
                <button
                  type="button"
                  className={`btn w-100 py-3 border text-start d-flex flex-column justify-content-between option-card ${loanAmount === "1000" ? "active" : ""}`}
                  onClick={() => handleAmountSelect("1000")}
                >
                  <span className="radio-dot mb-2"></span>
                  <span className="small text-muted text-nowrap">up to</span>
                  <strong className="h6 m-0">$1,000</strong>
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className={`btn w-100 py-3 border text-start d-flex flex-column justify-content-between option-card ${loanAmount === "3000" ? "active" : ""}`}
                  onClick={() => handleAmountSelect("3000")}
                >
                  <span className="radio-dot mb-2"></span>
                  <span className="small text-muted text-nowrap">up to</span>
                  <strong className="h6 m-0">$3,000</strong>
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className={`btn w-100 py-3 border text-start d-flex flex-column justify-content-between option-card ${loanAmount === "5000" ? "active" : ""}`}
                  onClick={() => handleAmountSelect("5000")}
                >
                  <span className="radio-dot mb-2"></span>
                  <span className="small text-muted text-nowrap">above +</span>
                  <strong className="h6 m-0">$3,000</strong>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2 mb-4">
              <button
                type="button"
                className="btn btn-outline-secondary px-3 py-3 rounded-3 d-flex align-items-center justify-content-center"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="btn btn-primary w-100 py-3 fw-bold rounded-3 fs-5"
                onClick={() => setShowAuthModal(true)}
              >
                Continue
              </button>
            </div>

            {/* Disclaimer Footer */}
            <footer className="disclaimer-text text-center text-muted">
              APR Ranges From 5.99% up to 35.99% For Qualified Customers 91 Day
              Minimum <br />
              up to 72 Month Maximum Repayment Period
            </footer>
          </div>
        </div>
      </main>
      <AuthModal show={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default LoanRequest;
