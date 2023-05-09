import React from "react";
import { BsFillSearchHeartFill, BsPlusLg } from "react-icons/bs";
import randomNotes from "../randomNotes";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Notes = () => {
  return (
    <div>
      <section>
        <header className="notes_header">
          <h2>My Notes</h2>
          <input type="text" autoFocus placeholder="Keyword" />
          <button className="btn">
            <BsFillSearchHeartFill />
          </button>
        </header>
        <div className="notes_container">
          {randomNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
          <Link className="btn add__btn">
            <BsPlusLg />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Notes;
