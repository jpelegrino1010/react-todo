import { createContext, useState } from 'react';

export const TodoContext = createContext({
  query: '',
  setQuery: () => {}
});

export default function TodoProvider({ children }) {
  const [query, setQuery] = useState('');

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const cxtValue = {
    setQuery: changeHandler,
    query: query
  };

  return (
    <TodoContext.Provider value={cxtValue}>{children}</TodoContext.Provider>
  );
}
