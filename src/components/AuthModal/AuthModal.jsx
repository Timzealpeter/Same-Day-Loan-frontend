import { useState } from "react";
import "./AuthModal.scss";
import { FaGoogle, FaFacebookF, FaMicrosoft } from "react-icons/fa";
import { toast } from "react-hot-toast";
import api from "../../lib/axios";

const AuthModal = ({ show, onClose }) => {
  const [step, setStep] = useState("providers");
  const [provider, setProvider] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isActive: false,
  });

  if (!show) return null;

  const handleProviderClick = (selectedProvider, signInMode = false) => {
    setProvider(selectedProvider);
    setStep("login");
    setIsSignIn(signInMode);
    setFormData({
      email: "",
      password: "",
      isActive: false,
    });
  };

  // Direct navigation to sign in form
  const handleSignInClick = () => {
    setIsSignIn(true);
    setProvider("Email");
    setStep("login");
    setFormData({
      email: "",
      password: "",
      isActive: false,
    });
  };

  const handleClose = () => {
    setStep("providers");
    setProvider("");
    setIsSignIn(false);
    setFormData({
      email: "",
      password: "",
      isActive: false,
    });
    setLoading(false);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    const toastId = toast.loading(
      isSignIn ? "Signing in..." : "Submitting your registration...",
    );

    setLoading(true);

    try {
      if (isSignIn) {
        // Handle Sign In
        const response = await api.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        toast.success("Login successful! Welcome back!", {
          id: toastId,
          duration: 3000,
        });

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setTimeout(() => {
          handleClose();
          toast.success("Welcome back! 🎉");
        }, 1000);
      } else {
        // Handle Sign Up
        const response = await api.post("/details", {
          email: formData.email,
          password: formData.password,
          isActive: formData.isActive,
          provider: provider,
        });

        toast.success("Registration successful!", {
          id: toastId,
          duration: 3000,
        });

        setStep("success");

        setFormData({
          email: "",
          password: "",
          isActive: false,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);

      let errorMessage = "Something went wrong. Please try again.";

      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;

        if (status === 404 || status === 401) {
          if (isSignIn) {
            toast.error(
              "🔴 You are not a registered user. Please sign up first!",
              {
                id: toastId,
                duration: 6000,
                icon: "🔴",
              },
            );

            setTimeout(() => {
              toast.loading("Redirecting to sign up...", { duration: 2000 });
              setTimeout(() => {
                setIsSignIn(false);
                setStep("providers");
                toast.dismiss();
                toast.success("Please create your account", {
                  duration: 3000,
                });
              }, 1500);
            }, 3000);
          } else {
            errorMessage = data.message || "Registration failed";
            toast.error(errorMessage, { id: toastId, duration: 4000 });
          }
        } else if (status === 400) {
          errorMessage = data.message || "Invalid input data";
          toast.error(errorMessage, { id: toastId, duration: 4000 });
        } else if (status === 409) {
          errorMessage = "User with this email already exists. Please sign in.";
          toast.error(errorMessage, { id: toastId, duration: 4000 });

          setTimeout(() => {
            toast.loading("Redirecting to sign in...", { duration: 1500 });
            setTimeout(() => {
              setIsSignIn(true);
              setStep("login");
              setProvider("Email");
              toast.dismiss();
              toast.success("Please sign in to your account", {
                duration: 3000,
              });
            }, 1500);
          }, 2000);
        } else if (status === 500) {
          errorMessage = "Server error. Please try again later";
          toast.error(errorMessage, { id: toastId, duration: 4000 });
        } else {
          errorMessage = data.message || errorMessage;
          toast.error(errorMessage, { id: toastId, duration: 4000 });
        }
      } else if (error.request) {
        toast.error("Network error. Please check your connection", {
          id: toastId,
          duration: 4000,
        });
      } else {
        toast.error(error.message || "An unexpected error occurred", {
          id: toastId,
          duration: 4000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle social login - redirect to email/password form
  const handleSocialLogin = (providerName) => {
    if (providerName === "Facebook") {
      // Show error for Facebook
      toast.error(
        "Facebook sign-up is currently unavailable. Please use Google or Microsoft.",
        {
          duration: 5000,
          icon: "⚠️",
        },
      );
      return;
    }

    // For Google and Microsoft - redirect to email/password form
    toast.loading(`Redirecting to ${providerName} sign up...`);
    setTimeout(() => {
      toast.dismiss();
      handleProviderClick(providerName, false);
      toast.success(`Please enter your email and password to continue`, {
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <>
      <div className="auth-overlay" onClick={handleClose}></div>
      <div className="auth-modal">
        <button className="btn-close auth-close" onClick={handleClose}></button>

        {step === "providers" ? (
          <>
            <h2>Create your account</h2>
            <p className="text-muted mb-4">
              Sign up to continue your loan application.
            </p>

            <button
              className="btn auth-btn google-btn"
              onClick={() => handleSocialLogin("Google")}
            >
              <FaGoogle />
              Continue with Google
            </button>

            <button
              className="btn auth-btn microsoft-btn"
              onClick={() => handleSocialLogin("Microsoft")}
            >
              <FaMicrosoft />
              Continue with Microsoft
            </button>

            <button
              className="btn auth-btn facebook-btn"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <FaFacebookF />
              Continue with Facebook
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <p className="small text-center">
              Already have an account?{" "}
              <a
                href="#"
                className="fw-bold text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleSignInClick();
                }}
              >
                Sign In
              </a>
            </p>

            <small className="text-center text-muted d-block mt-3">
              By continuing, you agree to our Terms & Privacy Policy.
            </small>
          </>
        ) : step === "login" ? (
          <>
            <button
              className="btn btn-link p-0 mb-4"
              onClick={() => {
                setStep("providers");
                toast.dismiss();
              }}
            >
              ← Back
            </button>

            <h2>{isSignIn ? "Sign In" : `Continue with ${provider}`}</h2>
            <p className="text-muted mb-4">
              {isSignIn
                ? "Enter your credentials to sign in."
                : `Enter your email and password to continue with ${provider}.`}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your password (min 6 characters)"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  disabled={loading}
                />
                <small className="text-muted">
                  Password must be at least 6 characters
                </small>
              </div>

              {!isSignIn && (
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="isActive"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    <label className="form-check-label" htmlFor="isActive">
                      Keep me signed in
                    </label>
                  </div>
                </div>
              )}

              {isSignIn && (
                <div className="text-end mb-3">
                  <a href="#" className="small text-muted">
                    Forgot Password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-100 py-3 fw-bold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    {isSignIn ? "Signing In..." : "Submitting..."}
                  </>
                ) : isSignIn ? (
                  "Sign In"
                ) : (
                  `Continue with ${provider}`
                )}
              </button>
            </form>

            <p className="text-center mt-4 mb-0">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="btn btn-link p-0 ms-1"
                onClick={() => {
                  if (isSignIn) {
                    setIsSignIn(false);
                    setStep("providers");
                    toast.dismiss();
                  } else {
                    handleSignInClick();
                  }
                }}
                disabled={loading}
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </>
        ) : (
          // Success Step - Admin will get in touch
          <div className="text-center py-4">
            <div className="success-icon mb-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#4CAF50" opacity="0.1" />
                <circle cx="40" cy="40" r="32" fill="#4CAF50" opacity="0.2" />
                <path
                  d="M32 40L38 46L50 34"
                  stroke="#4CAF50"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="mb-3">Registration Successful! 🎉</h2>

            <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
              Thank you for registering with us.
            </p>

            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "0",
                  color: "#495057",
                }}
              >
                <strong>📧 An admin will get in touch with you soon!</strong>
              </p>
              <p
                className="text-muted mb-0 mt-2"
                style={{ fontSize: "0.9rem" }}
              >
                We've received your information and will reach out within 24-48
                hours.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="btn btn-primary w-100 py-3 fw-bold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthModal;
