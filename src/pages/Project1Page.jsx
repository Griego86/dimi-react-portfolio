import axios from "axios";
import DOMAIN from "../services/endpont";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Project1Page() {

  const navigate = useNavigate()
  const [message, setMessage] = useState("")

  async function handleSubmit (e) {
    const username = e.target.username.value
    const comment = e.target.comment.value
    const newComment = { username, comment }
    const res = await axios.post(`${DOMAIN}/api/comments`, newComment)
    if (res?.data.success) {
      navigate('/dimi-react-portfolio/project1')
    } else {
      setMessage("THERE WAS AN ERROR POSTING YOUR COMMENT :(")
    }
  }

  return (
    <main className="flex-1">
      <h1>Super Chatt</h1>
      <p className="text-center pt-10">
        This is a chat app project that I built
      </p>
      <p className="text-center py-10">
        Stack: React, Node, Express, Postgres, Railway, socket.io
      </p>
      <section>
        <h2 className="text-center text-4xl">Comments</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto w-[300px]">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username (optional)"
            className="my-5 py-2 px-2 rounded bg-slate-500 text-white"
          />
          <textarea
            type="text"
            id="comment"
            name="comment"
            placeholder="Write a comment!"
            className="my-5 py-2 px-2 rounded bg-slate-500 text-white"
          />
          <button className="my-10 border-2 border-slate-300 py-5 text-2xl hover:text-black hover:bg-slate-300 transition-all ease-in-out duration-300">Post</button>
        </form>
        {message}
      </section>
    </main>
  );
}
