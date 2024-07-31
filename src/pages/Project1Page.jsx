import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../store/AuthStore";

export default function Project1Page() {
  const data = useLoaderData();

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { user } = useAuthStore((state) => state);
  const [commentContent, setCommentContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault()
    let username = user.username;
    const content = e.target.content.value;
    if (username === "") {
      username = "Anonymous";
    }
    const newComment = { username, content };
    const res = await axios.post(`${DOMAIN}/api/comments`, newComment);
    if (res?.data.success) {
      navigate("/dimi-react-portfolio/project1");
      setCommentContent("")
    } else {
      setMessage("THERE WAS AN ERROR POSTING YOUR COMMENT :(");
    }
  }

  async function handleDelete(e) {
    const comment_id = e.target.commentid.value
    const res = await axios.post(`${DOMAIN}/api/commments/${comment_id}`, {comment_id})
    if (res?.data.success) {
      navigate("/dimi-react-portfolio/project1");
    } else {
      setMessage("THERE WAS AN ERROR DELETING YOUR COMMENT :(");
    }
  }

  return (
    <main className="flex-1">
      {/* { && (
        <div className="text-2xl px-24 py-24 bg-slate-500 border border-white absolute z-10 md:top-[30%] md:left-[35%]">
          <p>Are you sure you want to delete?</p>
        </div>
      )} */}
      <h1>Super Chatt</h1>
      <p className="text-center pt-10">
        This is a chat app project that I built
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
              onChange={(e) => {setCommentContent(e.target.value)}}
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
          <div
            className="border py-10 px-10 md:W-[1000px] mx-auto w-[500px]"
            key={comment.comment_id}
          >
            <p className="text-xl text-white font-bold">
              {comment.username}{" "}
              <span className="text-gray-400">
                {comment.created_at.slice(0, 10)}
              </span>{" "}
              <span className="text-gray-400">
                {comment.created_at.slice(11, 19)}
              </span>
            </p>
            <p className="text-xl text-white font-bold">{comment.content}</p>

            {user && comment.username === user?.username ? (
              <div className="flex">
                <div className="pr-5">Edit</div>
                <form className="pl-5" onSubmit={handleDelete}>
                  <input type="text" className="hidden" value={comment.comment_id} name="commentid"/>
                  <button>Delete</button>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

export async function commentsLoader() {
  const res = await axios.get(`${DOMAIN}/api/comments`);
  return res.data;
}
