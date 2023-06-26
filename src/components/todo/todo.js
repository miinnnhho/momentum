import React from "react";
import "./todo.scss";
import { FiDelete } from "react-icons/fi";

function TodoList() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodoTitle, setNewTodoTitle] = React.useState("");

  function handleAddTodo() {
    if (!newTodoTitle) return;
    setTodoList([
      ...todoList,
      { title: newTodoTitle, isCompleted: false, completeAt: null },
    ]);
    setNewTodoTitle("");
  }

  function handleToggle(index) {
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
    newTodoList[index].completeAt = newTodoList[index].isCompleted
      ? new Date()
      : null;
    setTodoList(newTodoList);
  }

  function handleDelete(index) {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <div>
        <h3 className="question">What is your main focus for today?</h3>
        <div className="TodoAddAndHistory">
          <input
            className="WriteTodo"
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
          <button onClick={handleAddTodo}>+</button>
        </div>
        <ul className="TodoBoard">
          {todoList.map((todoItem, index) => (
            <li key={index}>
              <input
                className="TodoBoard-check"
                type="checkbox"
                checked={todoItem.isCompleted}
                onChange={() => handleToggle(index)}
              />
              {todoItem.title}

              <button
                className="DeleteButton"
                onClick={() => handleDelete(index)}
              >
                <FiDelete />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
