import { useEffect, useRef, useState } from "react";
import "./FeaturesSection.scss";

const FeaturesSection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Optional: unobserve once animated if you only want it to happen once
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15 }, // Triggers when 15% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="features-section bg-light py-5 overflow-hidden"
    >
      <div className="container container-custom py-md-4">
        <div className="row align-items-center g-5">
          {/* Left Column: Steps List */}
          <div className="col-lg-6 features-content-col">
            <div className="d-flex flex-column gap-4">
              {/* Step 1 */}
              <div className="d-flex align-items-start gap-4 feature-item">
                <div className="icon-wrapper flex-shrink-0">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#102a73"
                    strokeWidth="1.5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div>
                  <h3 className="h4 fw-bold text-navy mb-2">
                    Fill out the form
                  </h3>
                  <p className="text-muted m-0 leading-relaxed">
                    Our fast, safe and secure online form can be completed in
                    just 2 quick minutes.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="d-flex align-items-start gap-4 feature-item">
                <div className="icon-wrapper flex-shrink-0">
                  <div className="custom-circle-check">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#102a73"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 8 12 12 14 14" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="h4 fw-bold text-navy mb-2">
                    All credit types considered
                  </h3>
                  <p className="text-muted m-0 leading-relaxed">
                    You can fill out our online form with any level of credit
                    rating, from no rating to excellent!
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="d-flex align-items-start gap-4 feature-item">
                <div className="icon-wrapper flex-shrink-0">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#102a73"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <circle cx="12" cy="15" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="h4 fw-bold text-navy mb-2">Get your cash</h3>
                  <p className="text-muted m-0 leading-relaxed">
                    Our lenders will directly deposit funds to your account as
                    fast as the next business day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Image Mockup Layout */}
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end position-relative">
            {/* Soft decorative background shape */}
            <div className="decorative-bg-shape"></div>

            <div
              className={`mockup-animation-wrapper ${isIntersecting ? "animate-in" : ""}`}
            >
              <img
                src="https://img.emlasts.com/funnel/v1/img/AEF/es6v4-hero02.png"
                alt="App Interface Dashboard showing $10,000 balance"
                className="img-fluid app-mockup-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
