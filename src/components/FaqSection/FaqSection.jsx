import { useState } from "react";
import "./FaqSection.scss";

const FaqSection = () => {
  // Manage active accordion index state (0 is open by default as seen in image_d768ab.png)
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a personal loan?",
      answer:
        "A personal loan is a way for an individual to receive up to $35,000 in funding. It is a loan that can be used for home enhancements, luxury item purchases, vehicle repairs or large purchases. The length of the loan is called the term and can range all the way up to 180 days, depending on the lender. Our simple online form does not contain any long questions. Instead, it asks for your basic information and a location for where you would like the loan to be sent to. It is that easy!",
    },
    {
      question: "What are the basic loan requirements?",
      answer:
        "While specific requirements vary by partner lenders, basic criteria typically include: being at least 18 years old, a US citizen or permanent resident, having a steady source of recurring income, and maintaining an active checking account for direct fund deposits.",
    },
    {
      question: "Are there any fees?",
      answer:
        "Using our online platform to connect with lenders is completely free. SameDayLoan is not a lender and does not charge any upfront application or processing fees. If you are connected and accept a loan offer, your lender will disclose any applicable interest rates, loan fees, or repayment penalties before you sign.",
    },
    {
      question: "What are the repayment terms and the APR?",
      answer:
        "Repayment periods vary by lender, ranging from short-term solutions up to 72 months. Annual Percentage Rates (APR) typically vary from 5.99% to 35.99% for qualified consumers based on credit score, history, and the specific lender's underwriting policies.",
    },
    {
      question: "How/when do I repay the loan?",
      answer:
        "Repayments are typically set up automatically with your lender via electronic funds transfer (ACH) directly from your checking account on your scheduled paydays. This ensures you never miss a deadline or incur late fees.",
    },
    {
      question: "How do you protect my privacy and personal information?",
      answer:
        "We take security seriously. Our platform utilizes industry-standard 256-bit SSL encryption protocols to protect your personal and financial details, ensuring that your submitted info remains safe, secure, and confidential throughout the connection process.",
    },
  ];

  return (
    <section className="faq-section bg-light py-5">
      <div className="container container-custom bg-white p-4 p-md-5 rounded-4 shadow-sm">
        <div className="row g-5">
          {/* Left Side: Headings */}
          <div className="col-lg-5">
            <span className="d-block text-danger fw-semibold mb-2 subtitle-text">
              We are here to answer your questions
            </span>
            <h2 className="fw-bold text-navy display-6 mb-4 main-heading">
              Frequently Asked <br />
              <span className="text-primary-blue">Questions</span>
            </h2>
            <p className="text-muted leading-relaxed description-text">
              When getting a loan you may have some simply questions about the
              process or regarding requirement. We have placed some of the most
              frequently asked questions you may have to make the loan process
              easier for you.
            </p>
          </div>

          {/* Right Side: Custom Borderless Accordion */}
          <div className="col-lg-7">
            <div className="custom-accordion">
              {faqData.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`accordion-item-wrapper ${isOpen ? "active" : ""}`}
                  >
                    <button
                      className="accordion-trigger-btn w-100 d-flex justify-content-between align-items-center"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text fw-medium text-start">
                        {item.question}
                      </span>
                      <span
                        className={`arrow-icon-box ms-3 ${isOpen ? "rotate-up" : ""}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`accordion-content-panel ${isOpen ? "show-panel" : ""}`}
                    >
                      <div className="accordion-content-inner text-muted">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
