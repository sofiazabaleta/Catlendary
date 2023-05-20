import { Link, useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { formatDate } from "../utils/formatDate";
import BackButton from "../components/BackButton";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const currentDate = formatDate(new Date());

    if (title && details) {
      const newNote = { ...note, title, details, updatedAt: currentDate };

      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }
    //redirect to notes
    navigate("/notes");
  };

  const handleDelete = () => {
    if (window.confirm("you really want to delete this note?")) {
      const newNotes = notes.filter((item) => item.id != id);

      setNotes(newNotes);
      navigate("/notes");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <BackButton to={"/notes"} />
        <button className="btn-lg-primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn-delete-trshicon" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note_form" onSubmit={handleForm}>
        <input
          className="notes-title-create-note"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          className="textarea-notes-crt-nts"
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
