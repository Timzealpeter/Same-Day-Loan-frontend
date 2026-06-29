import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mwvdoqqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
        });

        setShowModal(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <form className="cf-form" onSubmit={handleSubmit}>
        <h2>Get Started</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Continue"}
        </button>
      </form>

      {showModal && (
        <div className="cf-modal-overlay">
          <div className="cf-modal">
            <div className="cf-icon">✓</div>

            <h2>Submission Successful</h2>

            <p>A verification code will be sent to your email shortly.</p>

            <button
              onClick={() => setShowModal(false)}
              className="cf-close-btn"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
