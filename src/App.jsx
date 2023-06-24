import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catlendary from "./pages/Catlendary";
import Notes from "./pages/Notes";
import TodosAndHabits from "./pages/TodosAndHabits";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CreateNote from "./pages/Createnote";
import EditNote from "./pages/EditNote";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [todosAndHabits, setTodosAndHabits] = useState(
    JSON.parse(localStorage.getItem("todosAndHabits")) || []
  );

  useEffect(() => {
    localStorage.setItem("todosAndHabits", JSON.stringify(todosAndHabits));
  }, [todosAndHabits]);

  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          "custom-green": [
            "#F8FCF9",
            "#D7EFE0",
            "#B4E9C8",
            "#9CD8B2",
            "#89C6A0",
            "#79B48F",
            "#6DA281",
            "#649075",
            "#5E7D6A",
          ],
        },
      }}
    >
      <main className="main">
        <div>
          <Navbar />
          <div className="container">
            <Routes>
              {/* Global Routes */}
              <Route path="/" element={<Home />} />
              {/* Calendary Routes */}
              <Route
                path="/catlendary"
                element={<Catlendary events={events} setEvents={setEvents} />}
              />
              {/* Notes Routes */}
              <Route path="/notes" element={<Notes notes={notes} />} />
              <Route
                path="/create-note"
                element={<CreateNote setNotes={setNotes} />}
              />
              <Route
                path="/notes/:id"
                element={<EditNote notes={notes} setNotes={setNotes} />}
              />
              {/* Todos Routes */}
              <Route
                path="/todo-list"
                element={
                  <TodosAndHabits
                    todosAndHabits={todosAndHabits}
                    setTodosAndHabits={setTodosAndHabits}
                  />
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <footer>
          <p>&copy; Sofia Zabaleta</p>
        </footer>
      </main>
    </MantineProvider>
  );
}

export default App;
