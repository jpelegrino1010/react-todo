import { useContext } from 'react';
import { TodoContext } from './../todo-contex';
const SearchTodo = () => {
  const cxt = useContext(TodoContext);

  return (
    <>
      <input type="text" placeholder="search todos" onChange={cxt.setQuery} />
    </>
  );
};

export default SearchTodo;
