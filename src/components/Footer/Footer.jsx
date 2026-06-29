import "./Footer.scss";
import sameDayLoan from "../../assets/sameDayLoan.png";

const Footer = () => {
  return (
    <footer className="aef-footer ">
      <div className="container">
        {/* Top Section */}
        <div className="row">
          <div className="col-lg-12">
            <img
              src={sameDayLoan}
              alt="Same Day Loan"
              className="footer-logo mb-1"
            />

            <h5 className="fw-bold mb-1">Contact Us:</h5>

            <p>SameDayLoan.com is powered by TPOLTECH, Inc.</p>

            <p>Address: 25855 McBean Pkwy #61, Valencia, CA 91355</p>

            <p>
              Telephone Number:
              <a href="tel:+13692280219"> 1-369-228-0219</a>
            </p>

            <p>
              Email Address:
              <a href="mailto:samedayloansgroup.inc@gmail.com">
                {" "}
                samedayloansgroup.inc@gmail.com
              </a>
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Disclaimer */}
        <div className="footer-content">
          <p>
            sameDayLoan.com is a privately operated service and is not
            affiliated with or endorsed by any federal, state, or local
            government agency.
          </p>

          <p>
            SameDayLoan.com (the "website") is not an offer or solicitation to
            lend. The website only provides a service and is not an agent,
            representative, or broker of any lender and does not endorse or
            charge you for any loan or product. The website operators are not
            lenders, do not make loans of any type, and do not make credit
            decisions.
          </p>

          <p>
            The website collects personal information provided by you and
            forwards it to partners in our lender network. You are under no
            obligation to use this website or service to initiate, contact, nor
            apply for credit or any loan product with any service provider or
            lender. Loan amounts vary from $500 and $35,000 but not all lenders
            can provide up to $35,000. Providing your information on the website
            does not guarantee you will be approved for a loan or credit
            product.
          </p>

          <p>
            Our <a href="#">Terms & Conditions</a> outline the rules and
            guidelines for using our services, while our{" "}
            <a href="#">Lending Policy</a> provides insights into the principles
            governing our lending practices. If you wish to opt out of the sale
            of your personal information, you can find details in our{" "}
            <a href="#">Do Not Sell My Personal Information</a> section. For
            those interested, our <a href="#">Loan Rates & Fees</a> page offers
            comprehensive information on associated costs. We are committed to
            transparency, as highlighted in our{" "}
            <a href="#">Credit Authorization</a> and{" "}
            <a href="#">Privacy Policy</a> documents, which detail how we handle
            your data securely. Additionally, if you no longer wish to receive
            communications from us, please refer to our{" "}
            <a href="#">Unsubscribe</a> page.
          </p>

          <p className="copyright">
            Copyright © 2015 - 2026 SameDayLoan.com - all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
