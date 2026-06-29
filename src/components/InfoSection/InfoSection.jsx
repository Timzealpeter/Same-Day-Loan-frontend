import "./InfoSection.scss";

const InfoSection = () => {
  return (
    <section className="info-section bg-white py-5 px-3">
      <div className="container text-center max-w-custom">
        {/* Red Accent Subheading */}
        <span className="d-block text-danger fw-semibold mb-2 subtitle-text">
          Getting a loan has never been easier
        </span>

        {/* Main Heading */}
        <h2 className="fw-bold mb-4 main-title text-navy">
          Make the right decision <br className="d-none d-sm-inline" />
          with SameDayLoan
        </h2>

        {/* Description Paragraph */}
        <p className="text-muted description-text mx-auto leading-relaxed">
          SameDayLoan was designed to be your fast & simple money solution to
          get a loan in any situation. By providing your information in our
          secure online form, we can help get you the loan you want. We have
          extensive partnerships with large authorized lenders allowing us to
          provide our free service in almost all 50 states from the privacy of
          your own home.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
