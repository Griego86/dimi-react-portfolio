import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header class="sticky block top-0 z-50 bg-slate-800">
      <div class="flex justify-between md:hidden">
        <NavLink class="py-2 px-2 text-lg font-bold" to="/">
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
        <button id="hamburger-menu" class="py-2 px-2 text-lg font-bold ">
          &#8801;
        </button>
      </div>
      <nav id="main-nav" class="md:text-2xl">
        <ul class="text-center font-bold md:flex">
          <li class="py-2 md:pl-2">
            <NavLink to="/dimi-react-portfolio/">Home</NavLink>
          </li>
          <li class="py-2 px-10">
            <NavLink to="/dimi-react-portfolio/about">About</NavLink>
          </li>
          <li class="py-2">
            <NavLink to="/dimi-react-portfolio/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
