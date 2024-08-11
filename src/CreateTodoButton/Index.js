import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext.js';
import React from 'react';

function CreateTodoButton() {
  const {
    setopenMOdal,
    openModal,
} = React.useContext(TodoContext)
  return (
    <button className="CreateTodoButton"
    onClick={() => {setopenMOdal(!openModal)}} 
    >+</button>
  );
}

export { CreateTodoButton };
