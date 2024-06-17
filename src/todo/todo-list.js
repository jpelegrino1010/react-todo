import { useEffect, useState, useContext } from 'react';
import { getAllTodo, removeTodo } from './../services/todo-service';
import Todo from './todo';
import classes from './todo-list.module.css';
import AddTodo from './add-todo';
import SearchTodo from './search-todo';
import { TodoContext } from './../todo-contex';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const cxt = useContext(TodoContext);

  useEffect(() => {
    loadTodo();
  }, []);

  function loadTodo() {
    getAllTodo()
      .then((result) => {
        setTodos(result);
      })
      .catch((err) => console.error(err));
  }

  const filterTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(cxt.query.toLowerCase())
  );

  const deleteTodo = (id) => {
    removeTodo(id)
      .then((res) => res)
      .catch((err) => console.error(err));
  };

  return (
    <article className={classes.todolist}>
      <header>
        <h1>Todo List</h1>
      </header>

      <section className={classes.search}>
        <SearchTodo />
      </section>

      <section className={classes.todo}>
        {filterTodos.map((todo) => (
          <div key={todo.id}>
            <Todo name={todo.name} onDelete={deleteTodo.bind(this, todo.id)} />
          </div>
        ))}
      </section>
      <section className={classes['add-todo']}>
        <AddTodo />
      </section>
    </article>
  );
};

export default TodoList;
