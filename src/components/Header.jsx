import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthStore from "../store/AuthStore";

export default function Header() {
  const [showHeader, setShowHeader] = useState(
    window.innerWidth > 700 ? true : false
  );
  const { logoutService, user } = useAuthStore((state) => state);

  return (
    <header className="sticky block top-0 z-50 bg-slate-700 py-3">
      <div className="flex justify-between md:hidden">
        <NavLink
          className="py-2 px-2 text-lg font-bold"
          to="/dimi-react-portfolio/"
        >
          <svg
            width="20px"
            height="30px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <rect x="0" fill="none" width="20" height="20" />

            <g>
              <path d="M16 8.5l1.53 1.53-1.06 1.06L10 4.62l-6.47 6.47-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5h4z" />
            </g>
          </svg>
        </NavLink>
        <button
          id="hamburger-menu"
          className="py-2 px-2 text-lg font-bold"
          onClick={() => setShowHeader(!showHeader)}
        >
          &#8801;
        </button>
      </div>
      {showHeader && (
        <nav id="main-nav" className="md:text-2xl">
          <ul className="text-center font-bold md:flex justify-between">
            <div className="md:flex">
              <li className="py-2">
                <NavLink
                  to="/dimi-react-portfolio/"
                  onClick={() =>
                    window.innerWidth < 700 ? setShowHeader(false) : ""
                  }
                  className="hover:bg-slate-400 transition-all ease-in-out duration-300 p-5 rounded-xl"
                >
                  Home
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/dimi-react-portfolio/projects"
                  onClick={() =>
                    window.innerWidth < 700 ? setShowHeader(false) : ""
                  }
                  className="hover:bg-slate-400 transition-all ease-in-out duration-300 p-5 rounded-xl"
                >
                  Projects
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/dimi-react-portfolio/about"
                  onClick={() =>
                    window.innerWidth < 700 ? setShowHeader(false) : ""
                  }
                  className="hover:bg-slate-400 transition-all ease-in-out duration-300 p-5 rounded-xl"
                >
                  About
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/dimi-react-portfolio/contact"
                  onClick={() =>
                    window.innerWidth < 700 ? setShowHeader(false) : ""
                  }
                  className="hover:bg-slate-400 transition-all ease-in-out duration-300 p-5 rounded-xl"
                >
                  Contact
                </NavLink>
              </li>
              <li className="py-2">
                <a
                  className="text-emerald-500 p-5"
                  href="https://flowcv.com/resume/kaba3skben"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </div>
            <div className="md:flex">
              <li className="py-2">
                <NavLink
                  className="p-5"
                  to="/dimi-react-portfolio/login"
                >
                  {user?.username}
                </NavLink>
              </li>
              {!user && <li className="py-2">
                <NavLink
                  className="p-5"
                  to="/dimi-react-portfolio/login"
                >
                  Login
                </NavLink>
              </li>}
              <li className="py-2">
                <NavLink
                  className="p-5"
                  onClick={logoutService}
                  to="/dimi-react-portfolio/"
                >
                  Logout
                </NavLink>
              </li>
              {!user && <li className="py-2">
                <NavLink
                  className="text-emerald-500 p-5"
                  to="/dimi-react-portfolio/signup"
                >
                  Sign Up
                </NavLink>
              </li>}
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
