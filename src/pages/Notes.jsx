import React, { useEffect, useState } from "react";
import { BsFillSearchHeartFill, BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import randomNotes from "../randomNotes";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowsearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <div>
      <section>
        <header className="notes_header">
          {!showSearch && <h2>My Notes</h2>}
          {showSearch && (
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                handleSearch();
              }}
              autoFocus
              placeholder="Keyword"
            />
          )}
          <button
            className="btn"
            onClick={() => setShowsearch((prevState) => !prevState)}
          >
            {showSearch ? <MdClose /> : <BsFillSearchHeartFill />}
          </button>
        </header>
        <div className="notes_container">
          {filteredNotes.length == 0 && (
            <p className="empty_notes">No Notes found.</p>
          )}

          {filteredNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
          <Link to="/create-note" className="btn add__btn">
            <BsPlusLg />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Notes;
