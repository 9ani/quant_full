import { useState } from "react";

const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginPayload = {
      email,
      password
    };

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginPayload),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      const data = await response.json();
      onSuccess(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white rounded-lg shadow-md space-y-6 max-w-sm w-full"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-md bg-gray-100"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border rounded-md bg-gray-100"
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => {
            setEmail("");
            setPassword("");
          }}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-2 rounded-full"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;