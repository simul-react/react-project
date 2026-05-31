import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!form.name) return "Name required";
    if (!form.email.includes("@")) return "Invalid email";
    if (form.password.length < 6) return "Password too short";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) return setError(err);

    setError("");

    // mock API
    console.log("Signup Data:", form);

    // simulate success
    alert("Signup success");
  };

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Signup</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}