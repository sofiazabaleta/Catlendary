import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Catlendary
      </Link>
      <ul>
        <Customlink to="/login">Login</Customlink>
        <Customlink to="/catlendary">Catlendary</Customlink>
        <Customlink to="/notes">Notes</Customlink>
        <Customlink to="/reminders">Reminders</Customlink>
        <Customlink to="/todo-list">To-do list</Customlink>
      </ul>
    </nav>
  );
}

function Customlink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
