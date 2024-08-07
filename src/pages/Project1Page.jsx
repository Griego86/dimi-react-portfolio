import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../store/AuthStore";
import Comment from "../components/Comment";

export default function Project1Page() {
  const data = useLoaderData();

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { user } = useAuthStore((state) => state);
  const [commentContent, setCommentContent] = useState("");
  
  

  async function handleSubmit(e) {
    e.preventDefault();
    let username = user.username;
    const content = e.target.content.value;
    if (username === "") {
      username = "Anonymous";
    }
    const newComment = { username, content };
    const res = await axios.post(`${DOMAIN}/api/comments`, newComment);
    if (res?.data.success) {
      navigate("/dimi-react-portfolio/project1");
      setCommentContent("");
    } else {
      setMessage("THERE WAS AN ERROR POSTING YOUR COMMENT :(");
    }
  }

  

  

  return (
    <main className="flex-1">
      {/* { && (
        <div className="text-2xl px-24 py-24 bg-slate-500 border border-white absolute z-10 md:top-[30%] md:left-[35%]">
          <p>Are you sure you want to delete?</p>
        </div>
      )} */}
      <h1 className="text-center py-20 text-6xl pt-20">Super Chatt</h1>
      <p className="text-center pt-10">
        This is a fully functioning chat app prject build using React, Node,
        Express and PostgreSQL. The frontend is hosted on Github Pages and the
        backend as well as the postgres database is hosted on railway.
      </p>
      <p className="text-center py-10">
        Stack: React, Node, Express, Postgres, Railway, socket.io
      </p>
      <section>
        <h2 className="text-center text-4xl">Comments</h2>
        {user && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mx-auto w-[300px]"
          >
            <textarea
              type="text"
              id="content"
              name="content"
              placeholder="Write a comment!"
              className="my-5 py-2 px-2 rounded bg-slate-500 text-white"
              value={commentContent}
              onChange={(e) => {
                setCommentContent(e.target.value);
              }}
            />
            <button className="my-10 border-2 border-slate-300 py-5 text-2xl hover:text-black hover:bg-slate-300 transition-all ease-in-out duration-300">
              Post
            </button>
          </form>
        )}
        {!user && (
          <div>
            <p className="text-center py-10">Please log in to add comments!</p>
          </div>
        )}
        {message}
      </section>
      <section>
        {data.map((comment) => (
          <Comment
            comment_id={comment.comment_id}
            content={comment.content}
            username={comment.username}
            created_at={comment.created_at}
            user={user}
          />
        ))}
      </section>
    </main>
  );
}

export async function commentsLoader() {
  const res = await axios.get(`${DOMAIN}/api/comments`);
  return res.data;
}
