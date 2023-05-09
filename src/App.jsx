import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catlendary from "./pages/Catlendary";
import Notes from "./pages/Notes";
import Reminders from "./pages/Reminders";
import Todolist from "./pages/TodoList";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CreateNote from "./pages/Createnote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <main className="main">
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            {/* Global Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/catlendary" element={<Catlendary />} />
            {/* Notes Routes */}
            <Route path="/notes" element={<Notes />} />
            <Route path="/create-note" element={<CreateNote />} />
            <Route path="/notes/:id" element={<EditNote />} />
            {/* Reminders Routes */}
            <Route path="/reminders" element={<Reminders />} />
            {/* Todos Routes */}
            <Route path="/todo-list" element={<Todolist />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <footer>
        <p>&copy; Sofia Zabaleta</p>
      </footer>
    </main>
  );
}

export default App;
