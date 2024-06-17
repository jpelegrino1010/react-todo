import { useState } from 'react';
import classes from './add-todo.module.css';
import { addTodo } from './../services/todo-service';

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const createTodo = (e) => {
    e.preventDefault();
    addTodo({ name: todo })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    window.location.reload();
  };
  return (
    <section className={classes['add-todo']}>
      <h4>Add a new Todo</h4>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default AddTodo;
