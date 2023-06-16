import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  Checkbox,
  Box,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiCheckio } from "react-icons/si";

const TodosAndHabits = ({ todosAndHabits, setTodosAndHabits }) => {
  const [openedTodo, { open: openTodo, close: closeTodo }] =
    useDisclosure(false);

  const [openedHabit, { open: openHabit, close: closeHabit }] =
    useDisclosure(false);

  // saves current value of the current item content (works for both todo and habit)
  const [currentItem, setCurrentItem] = useState("");

  //handles new item submition
  const handleSubmit = (e, type) => {
    e.preventDefault();
    //sets new todo into the todosAndHabits array (line: 13)
    const newItem = {
      id: uuid(),
      content: currentItem,
      type,
      check: false,
    };

    setTodosAndHabits((prev) => [...prev, newItem]);

    // resets currentItem to an empty string
    setCurrentItem("");
    if (type === "todo") {
      closeTodo();
    } else {
      closeHabit();
    }
  };

  // handle item delete
  const handleDelete = (id) => {
    if (window.confirm("you really want to delete this note?")) {
      // delete
      setTodosAndHabits((prev) => {
        const filteredTodosAndHabits = prev.filter((item) => {
          return item.id !== id;
        });
        return filteredTodosAndHabits;
      });
    } else {
      // don't delete
      return false;
    }
  };

  //handle item check
  const handleToggleCheck = (itemId) => {
    setTodosAndHabits((previousTodosAndHabits) => {
      const updatedTodosAndHabits = previousTodosAndHabits.map((item) => {
        if (item.id === itemId) {
          return { ...item, check: !item.check };
        } else {
          return item;
        }
      });
      return updatedTodosAndHabits;
    });
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
        <form
          className="create-todo-form"
          onSubmit={(e) => handleSubmit(e, "todo")}
        >
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
        <form
          className="create-habit-form"
          onSubmit={(e) => handleSubmit(e, "habit")}
        >
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
        onCheck={handleToggleCheck}
      />
    </div>
  );
};

// Component for rendering todos / habits
const TodosAndHabitsList = ({ todosAndHabits, onDelete, onCheck, onClick }) => {
  return todosAndHabits.map((item) => (
    <Item
      key={item.id}
      item={item}
      onDelete={onDelete}
      onCheck={onCheck}
      onClick={onClick}
    />
  ));
};

const Item = ({ item, onDelete, onCheck }) => {
  const theme = useMantineTheme();
  const { id, type, content, check } = item;
  return (
    <div
      className="todos-and-habit-item"
      style={{ backgroundColor: type === "todo" ? "#f6b7b7" : "#FFEC99" }}
    >
      <p>{content}</p>
      <Checkbox
        color={"custom-green.5"}
        className="checkbox-todos-habits"
        icon={SiCheckio}
        checked={check}
        onChange={() => onCheck(id)}
        size={"2rem"}
      />
      <button className="btn-delete-trshicon-todo" onClick={() => onDelete(id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default TodosAndHabits;
