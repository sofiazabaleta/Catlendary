import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const { id, details, title, createdAt, updatedAt } = note;

  console.log(updatedAt);

  return (
    <div className="note-item">
      <Link to={`/notes/${id}`} className="note">
        <h4>{title}</h4>
      </Link>
      <p>{details}</p>
      <p>CreatedAt: {createdAt}</p>
      <p>UpdatedAt: {updatedAt}</p>
      <small>max chupalo</small>
    </div>
  );
};

export default NoteItem;
