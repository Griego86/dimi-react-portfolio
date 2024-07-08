import $ from "jquery";
import ScrollReveal from "scrollreveal";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiPostman, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import postgresLogo from "/Postgresql_elephant.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
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

  return (
    <main class="flex-1">
      <h1 class="timeline-content js--fadeInRight text-3xl md:text-6xl pt-10 text-center">
        Hey, I'm Dimi 👋🏻 
      </h1>
      <h2 class="timeline-content js--fadeInLeft text-xl md:text-5xl text-center py-2 md:py-4">
      ...curious <button>👨🏻‍💻</button>?
      </h2>
      <section class="py-10">
        <p class="text-lg md:text-2xl text-center">
          Hi! I'm Dimi Athanasopoulos, a full stack web-developer based in Vancouver, BC.
        </p>
        <p class="text-lg md:text-2xl text-center">
          I graduated Lighthouse Labs in April 2024, and I build modern websites and
          webapps using React, Node and SQL.
        </p>
      </section>
      <section>
        <h2 class="text-xl md:text-4xl text-center">My Tech Stack</h2>
        <div class="py-10 md:grid grid-cols-5">
          <NavLink to="https://www.python.org" target="_blank">
            <FaPython size={75} className="mx-auto hover:bg-red-500 rounded-md" />
          </NavLink>
          <FaHtml5 size={75} className="mx-auto hover:bg-red-500 rounded-md" />
          <FaCss3Alt size={75} className="mx-auto" />
          <IoLogoJavascript size={75} className="mx-auto" />
          <FaReact size={75} className="mx-auto" />
          <SiMongodb size={75} className="mx-auto" />
          <FaNodeJs size={75} className="mx-auto" />
          <SiExpress size={75} className="mx-auto" />
          <DiJqueryLogo size={75} className="mx-auto" />
          <SiPostman size={75} className="mx-auto" />
          <SiPostgresql size={75} className="mx-auto" />
          {/* <img src={postgresLogo} alt="" class="py-2 w-[75px] mx-auto" />
          <img
            src="./images//python.svg"
            alt=""
            class="py-2 w-[75px] mx-auto"
          /> */}
        </div>
      </section>
    </main>
  );
}
