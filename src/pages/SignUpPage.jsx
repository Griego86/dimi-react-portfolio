import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newUser = {
      username,
      email,
      password,
    };
    const res = await axios.post(`${DOMAIN}/api/users`, newUser);

    if (res?.data.success) {
      navigate("/dimi-react-portfolio/login");
      setMessage("Account created successfully!");
    } else {
      setMessage(res?.data.message);
    }
  }

  return (
    <main className="flex-1 flex flex-col">
      <h1 className="text-center text-4xl py-10">Sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
        <div>
          <input
            type="text"
            placeholder="Username"
            className="py-1 rounded-2xl bg-transparent border border-white px-5"
            name="username"
            id="username"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            className="my-10 py-1 rounded-2xl bg-transparent border border-white px-5"
            name="email"
            id="email"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="py-1 rounded-2xl bg-transparent border border-white px-5"
            name="password"
            id="password"
          />
        </div>
        <button className="my-10 border-2 border-white py-5">Sign Up</button>
      </form>
      {message}
    </main>
  );
};

export default SignUpPage;
