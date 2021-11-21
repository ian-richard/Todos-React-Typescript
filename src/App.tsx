import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No todos found. Maybe add one?</p>
  );
  if (todos.length > 0) {
    content = <Todos items={todos} onRemoveTodo={removeTodoHandler}/>;
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      {content}
      
    </div>
  );
}

export default App;
