import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const { id, details, title, createdAt, updatedAt } = note;

  return (
    <Link to={`/notes/${id}`} className="clean-link">
      <div className="note-item">
        <h4>{title}</h4>
        <p className="details">
          {details.length > 75 ? `${details.substring(0, 75)}...` : details}
        </p>
        <p>CreatedAt: {createdAt}</p>
        <p>UpdatedAt: {updatedAt}</p>
      </div>
    </Link>
  );
};

export default NoteItem;
