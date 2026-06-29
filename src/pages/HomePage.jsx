import LoanRequest from "../components/LoanRequest/LoanRequest";
import InfoSection from "../components/InfoSection/InfoSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import QuickStepSection from "../components/QuickStepSection/QuickStepSection";
import FaqSection from "../components/FaqSection/FaqSection";
import LoanAPR from "../components/LoanAPR/LoanAPR";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <main className="main-content">
      <LoanRequest />
      <InfoSection />
      <FeaturesSection />
      <QuickStepSection />
      <FaqSection />
      <LoanAPR />
      <Footer />
    </main>
  );
};

export default HomePage;
