export default function EmailStep({ email, setEmail, next }) {
  const handleNext = (e) => {
    e.preventDefault();

    if (!email) return;

    next();
  };

  return (
    <form onSubmit={handleNext}>
      <h1>Sign in</h1>

      <p>Continue to your account</p>

      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Next</button>
    </form>
  );
}
