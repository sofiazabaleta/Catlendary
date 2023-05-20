import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BackButton = ({ to }) => {
  return (
    <Link to={to} className="back-btn">
      <IoMdArrowBack size={"1.5rem"} />
    </Link>
  );
};

export default BackButton;
