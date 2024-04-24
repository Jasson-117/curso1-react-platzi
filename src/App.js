import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/*const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];*/
function useLocalStorage(itemName,parsedItem) {
  const localStorageTodos = localStorage.getItem(itemName)
  let parsedTodos
  if(!localStorageTodos){
    localStorage.setItem(itemName,JSON.stringify(parsedItem))
    parsedTodos = parsedItem
  }else {
    parsedTodos = JSON.parse(localStorageTodos)
  }
  const [item,setItem] = React.useState(parsedTodos)
  const saveItem = (newTodos)  => {
    localStorage.setItem(itemName, JSON.stringify(newTodos))
    setItem(newTodos)
}
return [item,saveItem]
  }
function App() {
 
  const [searchValue,setSearchValue] = React.useState('')
  console.log(searchValue);
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]); 
  const completedTodos = todos.filter(todos => todos.completed).length
  const todoss = todos.length
  const todosLi = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  })
  
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text
    )
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }
  
return (   
<>
      <TodoCounter completed={completedTodos} total={todoss} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {todosLi.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
           
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}




export default App;
