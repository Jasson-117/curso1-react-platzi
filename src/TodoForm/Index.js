import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext.js';

function TodoForm() {
    const {addTodo,
        setopenMOdal
        
    } = React.useContext(TodoContext)
    
  const  [newTodoValue, setNewTodoValue]  = React.useState('')
  
    const onSubmit = (event)=>{
        event.preventDefault()
        addTodo(newTodoValue)
        setopenMOdal(false)}

    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
        }  

    const onCancel = (event)=>{
        event.preventDefault()
        setopenMOdal(false)}
       

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea onChange = {onChange} value = {newTodoValue} placeholder='Preparar la cena'/>
            <div className="TodoForm-buttonContainer">
            <button className='Todo-formButton Todo-formButton--cancel'>cancelar</button>
            <button className='Todo-formButton Todo-formButton--add'>añadir</button> 
            </div>
           
        </form>
        
    );
}

export { TodoForm };
