import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItems: saveTodos, loading, error } = useLocalStorage('t_1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setopenMOdal] = React.useState(false);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const todosLi = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false
     })
    saveTodos(newTodos);
  }
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completeTodo,
      deleteTodo,
      todosLi,
      searchValue,
      setSearchValue,
      completedTodos,
      totalTodos,
      openModal,
      setopenMOdal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
