import $ from "jquery";
import ScrollReveal from "scrollreveal";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiPostman, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import postgresLogo from "/Postgresql_elephant.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.title = 'Home | Dimi Athanasopoulos'
  }, [])

  const $mainNav = $("#main-nav");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  $mainNav.hide();

  if (window.innerWidth > 700) {
    $mainNav.show();
  }

  // hamburgerMenu.addEventListener('click', function(){
  //   $mainNav.slideToggle();
  // })

  $(function () {
    window.sr = ScrollReveal();

    {
      sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });
    }

    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  });

  const handleStyle = { display: visible ? 'none' : '' }

  return (
    <main className="flex-1 overflow-x-hidden">
      <h1 className="timeline-content js--fadeInRight text-3xl md:text-6xl pt-10 text-center">
        Hey, I'm Dimi 👋🏻 
      </h1>
      <h2 className="timeline-content js--fadeInLeft text-6xl md:text-5xl text-center py-2 md:py-4">
      ...curious <button id="spin" className="bg-slate-500 rounded-xl px-1 hover:text-6xl" onClick={() => setVisible(!visible)}>👨🏻‍💻</button> ?
      </h2>
      <div style={handleStyle}>
      <section className="py-10 bg-emerald-600">
        <p className="text-lg md:text-2xl text-center">
          Hi! I'm Dimi Athanasopoulos, a full stack web-developer based in Vancouver, BC.
        </p>
        <p className="text-lg md:text-2xl text-center">
          I graduated Lighthouse Labs in April 2024, and I build modern websites and
          webapps using React, Node and SQL.
        </p>
      </section>
      </div>
      <section className="bg-slate-600">
        <h2 className="text-xl md:text-4xl text-center py-5">My Tech Stack</h2>
        <div className="py-10 md:grid grid-cols-5">
          <NavLink to="https://www.python.org" target="_blank">
            <FaPython size={75} color="yellow" className="mx-auto hover:bg-blue-900 rounded-md" />
          </NavLink>
          <FaHtml5 size={75} className="mx-auto hover:bg-orange-700 rounded-md" />
          <FaCss3Alt size={75} className="mx-auto hover:bg-blue-700 rounded-md" />
          <IoLogoJavascript color="black" size={75} className="mx-auto hover:bg-yellow-300 rounded-md" />
          <FaReact size={75} className="mx-auto" />
          <SiMongodb size={75} className="mx-auto p-2" />
          <FaNodeJs color="green" size={75} className="hover:bg-white rounded-md mx-auto p-1" />
          <SiExpress color="darkgrey" size={75} className="mx-auto hover:bg-black rounded-md p-2" />
          <DiJqueryLogo color="darkblue" size={75} className="mx-auto hover:bg-slate-400 rounded-md" />
          <SiPostman color="darkorange" size={75} className="mx-auto p-2 hover:bg-white rounded-md" />
          <SiPostgresql size={75} className="mx-auto hover:bg-blue-900 rounded-md p-2" />
          {/* <img src={postgresLogo} alt="" className="py-2 w-[75px] mx-auto" />
          <img
            src="./images//python.svg"
            alt=""
            className="py-2 w-[75px] mx-auto"
          /> */}
        </div>
      </section>
    </main>
  );
}
