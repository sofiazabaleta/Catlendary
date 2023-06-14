import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Checkbox } from "@mantine/core";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiCheckio } from "react-icons/si";

//controlcheckbox

const TodosAndHabits = ({ todosAndHabits, setTodosAndHabits }) => {
  const [openedTodo, { open: openTodo, close: closeTodo }] =
    useDisclosure(false);
  const [openedHabit, { open: openHabit, close: closeHabit }] =
    useDisclosure(false);

  // saves current value of the current item content (works for both todo and habit)
  const [currentItem, setCurrentItem] = useState("");

  //handles todo submition
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    //sets new todo into the todosAndHabits array (line: 13)

    const newTodo = {
      id: uuid(),
      content: currentItem,
      type: "todo",
      check: false,
    };

    setTodosAndHabits((prev) => [...prev, newTodo]);

    // resets currentItem to an empty string
    setCurrentItem("");
    closeTodo();
  };

  const handleDelete = (id) => {
    if (window.confirm("you really want to delete this note?")) {
      const filteredTodosAndHabits = todosAndHabits.filter(
        (item) => item.id != id
      );
      setTodosAndHabits(filteredTodosAndHabits);
    }
  };

  //handles habitß submition
  const handleHabitSubmit = (e) => {
    e.preventDefault();
    //sets new habit into the todosAndHabits array (line: 13)
    const newHabit = {
      id: uuid(),
      content: currentItem,
      type: "habit",
      check: false,
    };

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
      <TodosAndHabitsList
        todosAndHabits={todosAndHabits}
        onDelete={handleDelete}
      />
    </div>
  );
};

// Component for rendering todos / habits

const TodosAndHabitsList = ({ todosAndHabits, onDelete, onClick }) => {
  return todosAndHabits.map((item, id) => (
    <div
      key={id}
      style={{
        color: item.type === "todo" ? "purple" : "yellow",
      }}
    >
      <p>{item.content}</p>

      <Checkbox icon={SiCheckio} color={"pink"} defaultChecked />

      {/* <button className="check-todos-and-habits">
        <SiCheckio />
      </button> */}

      <button
        className="btn-delete-trshicon-todo"
        onClick={() => onDelete(item.id)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  ));
};

export default TodosAndHabits;
