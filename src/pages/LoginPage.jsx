import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useAuthStore((state) => state);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!!user) {
      navigate("/dimi-react-portfolio");
    }
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (!email || !password) return;

    loginService(email, password);

    setTimeout(() => {
      if (!user) {
        setMessage("invalid login credentials");
      }
    }, 500)
  }

  return (
    <main className="flex-1 flex flex-col">
      <h2 className="text-center text-4xl py-10">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
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
        <button className="my-10 border-2 border-white py-5">Login</button>
      </form>
      <p className="text-center">{message}</p>
    </main>
  );
};

export default LoginPage;
