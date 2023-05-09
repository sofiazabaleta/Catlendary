import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const CreateNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <link to="/" className="btn">
          <IoMdArrowBack />
        </link>
        <button className="btn lg primary">Save</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" autofocus />
        <textarea rows="28" placeholder="Note details..."></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
