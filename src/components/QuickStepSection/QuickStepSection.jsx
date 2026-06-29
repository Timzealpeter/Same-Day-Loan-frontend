import "./QuickStepSection.scss";

const QuickStepSection = () => {
  return (
    <section className="quick-step-section bg-white py-5">
      <div className="container container-custom py-md-4">
        <div className="row align-items-center g-5">
          {/* Left Column: Image with Cutout Elements */}
          <div className="col-md-5 d-flex justify-content-center position-relative">
            <div className="image-graphics-container">
              {/* Solid Red Square Element */}
              <div className="graphic-red-square"></div>

              {/* Large Soft Light-Grey Backdrop */}
              <div className="graphic-grey-backdrop">
                <img
                  src="https://img.emlasts.com/funnel/v1/img/AEF/es6v4-hero03.png"
                  alt="Smiling woman thinking"
                  className="hero-person-img"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="col-md-7 ps-lg-5">
            <h2 className="fw-bold mb-4 display-6 text-navy main-heading">
              Getting a loan is a{" "}
              <span className="text-primary-blue">quick step</span> process
            </h2>
            <p className="text-muted explanation-text leading-relaxed">
              SameDayLoan was designed to be your fast & simple money solution
              to get a loan in any situation. By providing your information in
              our secure online form, we can help get you the loan you want. We
              have extensive partnerships with large authorized lenders allowing
              us to provide our free service in almost all 50 states from the
              privacy of your own home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStepSection;
