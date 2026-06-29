import { useState } from "react";
import EmailStep from "../components/EmailStep";
import PasswordStep from "../components/PasswordStep";

export default function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <>
      {step === 1 && (
        <EmailStep email={email} setEmail={setEmail} next={() => setStep(2)} />
      )}

      {step === 2 && <PasswordStep email={email} />}
    </>
  );
}
