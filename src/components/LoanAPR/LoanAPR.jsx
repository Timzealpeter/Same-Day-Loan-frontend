import "./LoanAPR.scss";

const loanData = [
  {
    amount: "$1,000",
    apr: "24%",
    term: "12 Months",
    feePercent: "5%",
    feeAmount: "$50",
    monthly: "$99.29",
    payments: "12",
    total: "$1,191.48",
  },
  {
    amount: "$2,000",
    apr: "19%",
    term: "24 Months",
    feePercent: "5%",
    feeAmount: "$100",
    monthly: "$105.86",
    payments: "24",
    total: "$2,540.64",
  },
  {
    amount: "$5,000",
    apr: "13%",
    term: "48 Months",
    feePercent: "5%",
    feeAmount: "$250",
    monthly: "$140.84",
    payments: "48",
    total: "$6,760.32",
  },
  {
    amount: "$10,000",
    apr: "8%",
    term: "60 Months",
    feePercent: "5%",
    feeAmount: "$500",
    monthly: "$212.90",
    payments: "60",
    total: "$12,774.00",
  },
];

const rows = [
  { label: "Loan Amount", key: "amount" },
  { label: "Interest Rate (APR)", key: "apr" },
  { label: "Loan Term", key: "term" },
  { label: "Other Fees/Costs (%)", key: "feePercent" },
  { label: "Other Fees/Costs ($)", key: "feeAmount" },
  { label: "Monthly Payments", key: "monthly" },
  { label: "Number of Payments", key: "payments" },
  { label: "Total Payments", key: "total" },
];
const scrollToLoanRequest = () => {
  document
    .getElementById("LoanRequest")
    ?.scrollIntoView({ behavior: "smooth" }); // ✅ Correct spelling
};

export default function LoanAPR() {
  return (
    <section className="loan-apr-section py-5">
      <div className="container">
        <p className="loan-apr-tag text-center mb-2">Representative example</p>

        <h2 className="loan-apr-title text-center mb-5">
          APR: Total <span>loan costs</span> & all applicable <span>fees</span>
        </h2>

        <div className="table-responsive shadow-sm">
          <table className="table loan-apr-table mb-0">
            <tbody>
              {rows.map((row) => (
                <tr key={row.key}>
                  <th>{row.label}</th>

                  {loanData.map((item) => (
                    <td key={item.amount}>{item[row.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-5">
          <h2 className="loan-cta-title mb-4">
            Request and secure your loan today
          </h2>

          <button
            className="btn btn-primary loan-btn px-5"
            onClick={scrollToLoanRequest}
          >
            Request Now
          </button>
        </div>
      </div>
    </section>
  );
}
