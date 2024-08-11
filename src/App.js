import React from 'react';
import { TodoContext, TodoProvider } from './TodoContext';
import { TodoCounter } from './TodoCounter/Index';
import { TodoSearch } from './TodoSearch/Index';
import { TodoList } from './TodoList/Index';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/Index';
import { Empty } from './Empty.js';
import { Error } from './Error.js';
import { Loading } from './Loading.js';
import { Modal } from './Modal/Index.js';
import { TodoForm } from './TodoForm/Index.js';



/*const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];
localStorage.setItem('t_1',JSON.stringify(defaultTodos))
localStorage.removeItem('t_1')*/

function App() {
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({ openModal, setopenMOdal, loading, error, completeTodo, deleteTodo, todosLi, searchValue, setSearchValue, completedTodos, totalTodos }) => (
          <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            
            <TodoList>
              {loading && <Loading />}
              {error && <Error />}
              {(!loading && todosLi.length === 0) && <Empty />}
              {todosLi.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
            <CreateTodoButton />
            {openModal && (<Modal><TodoForm/></Modal> )}
          </>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  );
}

export default App;
