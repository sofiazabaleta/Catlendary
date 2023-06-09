import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/formatDate";
import BackButton from "../components/BackButton";

const CreateNote = (props) => {
  const { setNotes } = props;
  const [title, seTitle] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const currentDate = formatDate(new Date());
      const note = {
        id: uuid(),
        title,
        details,
        createdAt: currentDate,
        updatedAt: currentDate,
      };
      // add this note to the notes array
      setNotes((prevNotes) => [note, ...prevNotes]);
      //redirect to notes page
      navigate(`/notes`);
    }
  };

  return (
    <section>
      <header className="-note_createheader">
        <div className="btn-group">
          <BackButton to={"/notes"} />
          <button className="btn-lg-primary" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </header>
      <form className="create-note_form" onSubmit={handleSubmit}>
        <input
          className="notes-title-create-note"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => seTitle(e.target.value)}
          autoFocus
        />
        <textarea
          className="textarea-notes-crt-nts"
          rows="28"
          placeholder="Your note..."
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
