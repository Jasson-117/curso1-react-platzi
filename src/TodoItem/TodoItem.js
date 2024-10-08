import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon.js';
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onCompleted={props.onComplete} />

    { /* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>
        V
  </span>*/}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
   { /*  <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
</span>*/}
    </li>
  );
}

export { TodoItem };