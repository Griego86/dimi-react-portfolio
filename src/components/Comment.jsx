import { useState } from "react";
import DOMAIN from "../services/endpoint";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Comment(props) {
  const [editMode, setEditMode] = useState(false);
  const [editCommentContent, setEditCommentContent] = useState(props.content);

  const navigate = useNavigate();

  async function handleDelete(e) {
    e.preventDefault();
    const comment_id = props.comment_id;
    const res = await axios.post(`${DOMAIN}/api/comments/${comment_id}`, {
      comment_id,
    });
    if (res?.data.success) {
      navigate("/dimi-react-portfolio/project1");
    } else {
      setMessage("THERE WAS AN ERROR DELETING YOUR COMMENT :(");
    }
  }

  async function handleEdit(e) {
    e.preventDefault();
    const content = e.target.content.value;
    const comment_id = props.comment_id;
    const newComment = { content, comment_id };
    const res = await axios.put(
      `${DOMAIN}/api/comments/${comment_id}`,
      newComment
    );
    if (res?.data.success) {
      setEditMode(false);
      navigate("/dimi-react-portfolio/project1");
      setEditCommentContent("");
    } else {
      setMessage("THERE WAS AN ERROR EDITING YOUR COMMENT :(");
    }
  }

  return (
    <div
      className="border py-10 px-10 md:W-[1000px] mx-auto w-[500px]"
      key={props.comment_id}
    >
      <p className="text-xl text-white font-bold">
        {props.username}{" "}
        <span className="text-gray-400">{props.created_at.slice(0, 10)}</span>{" "}
        <span className="text-gray-400">{props.created_at.slice(11, 19)}</span>
      </p>
      <p className="text-xl text-white font-bold">{props.content}</p>
      <div className="flex">
      {props.user && <div className="pr-10">Reply</div>}
        {props.user && props.username === props.user?.username ? (
          <>
            <div
              className="pr-5 cursor-pointer"
              onClick={() => setEditMode(true)}
            >
              Edit
            </div>
            <form className="pl-5" onSubmit={handleDelete}>
              <input
                type="text"
                className="hidden"
                value={props.comment_id}
                name="commentid"
              />
              <button>Delete</button>
            </form>
          </>
        ) : (
          ""
        )}
       
      </div>
      {editMode && (
        <form className="flex" onSubmit={handleEdit}>
          <input
            className="my-5 py-2 px-2 rounded bg-slate-500 text-white"
            type="text"
            name="content"
            id="content"
            value={editCommentContent}
            onChange={(e) => setEditCommentContent(e.target.value)}
          />
          <button className="mx-2">Edit</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}
