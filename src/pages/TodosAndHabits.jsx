import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import { useState } from "react";

//* todo / habit interface
// {
//   content: string;
//   type: 'todo' | 'habit';
//   check: boolean
// }

//? explain (john)
//todo add filters
//todo save todos and habits to localstorage
//todo add unique id to items
//!fix todos and habits list (should return item component) and change currkjgtentItem to useRef

const TodosAndHabits = () => {
  const [openedTodo, { open: openTodo, close: closeTodo }] =
    useDisclosure(false);
  const [openedHabit, { open: openHabit, close: closeHabit }] =
    useDisclosure(false);

  // temporally saved todos and habits array
  const [todosAndHabits, setTodosAndHabits] = useState([]);

  // saves current value of the current item content (works for both todo and habit)
  const [currentItem, setCurrentItem] = useState("");

  //handles todo submition
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    //sets new todo into the todosAndHabits array (line: 13)
    setTodosAndHabits((prev) => [
      ...prev,
      { content: currentItem, type: "todo", check: false },
    ]);
    // resets currentItem to an empty string
    setCurrentItem("");
    closeTodo();
  };

  //handles habitß submition
  const handleHabitSubmit = (e) => {
    e.preventDefault();
    //sets new habit into the todosAndHabits array (line: 13)
    setTodosAndHabits((prev) => [
      ...prev,
      { content: currentItem, type: "habit", check: false },
    ]);
    // resets currentItem to an empty string
    setCurrentItem("");
    closeHabit();
  };

  return (
    <div>
      <h1 className="title-todosandhabits"> To-do's & Habits</h1>
      <Modal
        className="add-todo-in-modal"
        opened={openedTodo}
        onClose={closeTodo}
        title="Add To-do"
      >
        <form className="create-todo-form" onSubmit={handleTodoSubmit}>
          <input
            data-autofocus
            className="textarea-todo-add-todo"
            placeholder="Buy milk"
            onChange={(e) => setCurrentItem(e.target.value)}
          />
          <Button className="sumit-btn-todo" type="submit">
            Add
          </Button>
        </form>
      </Modal>
      {/* habit  */}
      <Modal
        className="add-habit-in-modal"
        opened={openedHabit}
        onClose={closeHabit}
        title="Add Habit"
      >
        <form className="create-habit-form" onSubmit={handleHabitSubmit}>
          <input
            data-autofocus
            className="textarea-habit-add-habit"
            placeholder="Exercise"
            onChange={(e) => setCurrentItem(e.target.value)}
          />
          <Button type="submit" className="sumit-btn-habit">
            Add
          </Button>
        </form>
      </Modal>
      <Group position="apart">
        {/* Modal todo */}
        <Button className="open-modal-btn-todo" onClick={openTodo}>
          + Add To-do
        </Button>
        {/*modal habit*/}
        <Button className="open-modal-btn-habit" onClick={openHabit}>
          + Add Habit
        </Button>
      </Group>
      <TodosAndHabitsList todosAndHabits={todosAndHabits} />
    </div>
  );
};

// Component for rendering todos / habits
const TodosAndHabitsList = ({ todosAndHabits }) => {
  return todosAndHabits.map((item, idx) => (
    <div
      key={idx}
      style={{ color: item.type === "todo" ? "purple" : "yellow" }}
    >
      {item.content}
    </div>
  ));
};

export default TodosAndHabits;
