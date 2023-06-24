import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title clean-link">
        Catlendary
      </Link>
      <ul>
        <Customlink to="/catlendary">Catlendary</Customlink>
        <Customlink to="/notes">Notes</Customlink>
        <Customlink to="/todo-list">To-do list & Habits</Customlink>
      </ul>
    </nav>
  );
}

function Customlink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className="clean-link">
        {children}
      </Link>
    </li>
  );
}
