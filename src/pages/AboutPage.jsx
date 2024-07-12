import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Dimi Athanasopoulos'
  }, [])

  return (
    <main className="flex-1">
      <h1 className="text-3xl md:text-6xl py-10 text-center">About Me</h1>
      <h2 className="text-xl md:text-4xl text-center"></h2>
      <div className="mx-6 text-slate-300 md:w-[700px] md:mx-auto">
        <p className="text-base md:text-2xl text-center py-8">
          At the end of 2023, inspired by a desire to automate repetitive
          processes and free up valuable time for high-value work, I embarked on
          a new software engineering journey, culminating in my graduation with
          a
          <a
            className="text-slate-100 underline font-extrabold hover:text-emerald-400 pl-1"
            href="https://www.lighthouselabs.ca/en/web-development"
          >
            Web Development diploma
          </a>
          .
        </p>
        <p className="text-base md:text-2xl text-center py-8">
          The road ahead is still long, but with a solid foundation in
          full-stack web development, I am excited to tackle the challenges and
          opportunities that lie ahead. My expertise spans both
          <a className="text-slate-100 underline font-extrabold hover:text-emerald-400 px-1" href="">
            front-end
          </a>
          and
          <a className="font-extrabold text-slate-100 underline hover:text-emerald-400 px-1" href="">
            back-end
          </a>
          technologies, enabling me to create seamless, efficient, and dynamic
          web applications.
        </p>
        <p className="text-base md:text-2xl text-center py-8">
          When I'm not a the computer I like to
          <a className="text-red-500 underline pl-1 font-bold" href="https://www.olympiacos.org/en/">
            play soccer
          </a>
          , go cycling and hang out with my dog getting lost in
          British Columbia's endless hiking trails.
        </p>
      </div>
    </main>
  );
}
