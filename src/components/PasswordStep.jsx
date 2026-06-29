import { useState } from "react";

export default function PasswordStep({ email }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome back</h1>

      <p>{email}</p>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Sign in</button>
    </form>
  );
}
