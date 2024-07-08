import $ from "jquery";
import ScrollReveal from "scrollreveal";
import { FaPython, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
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
        Dimi Athanasopoulos
      </h1>
      <h2 class="timeline-content js--fadeInLeft text-xl md:text-4xl text-center py-2 md:py-4">
        Full Stack Developer
      </h2>
      <section class="py-10">
        <p class="text-lg md:text-2xl text-center">
          Hi! I'm Dimi, a full stack web-developer based in Vancouver, BC.
        </p>
        <p class="text-lg md:text-2xl text-center">
          Graduated Lighthouse Labs April 2024, and I build modern websites and
          webapps using React, Node and PostgreSQL.
        </p>
      </section>
      <section>
        <h2 class="text-xl md:text-4xl text-center">My Tech Stack</h2>
        <div class="py-10 md:grid grid-cols-5">
          <NavLink to="https://www.python.org" target="_blank">
            <FaPython size={75} className="mx-auto" />
          </NavLink>
          <FaHtml5 size={75} className="mx-auto" />
          <FaCss3Alt size={75} className="mx-auto" />
          <IoLogoJavascript size={75} className="mx-auto" />
          <FaReact size={75} className="mx-auto" />
          <SiMongodb size={75} className="mx-auto" />
          <img src={postgresLogo} alt="" class="py-2 w-[75px] mx-auto" />
          <img
            src="./images//python.svg"
            alt=""
            class="py-2 w-[75px] mx-auto"
          />
        </div>
      </section>
    </main>
  );
}
