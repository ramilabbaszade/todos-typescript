import React from 'react'
import { ListGroup } from 'react-bootstrap'
import trashIcon from './trash.png'

interface TodoListItemProps {
    todo: Todo,
    toggleComplete: ToggleComplete,
}

const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleComplete,
}) => {

    return (
        <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-around' }}>
            <input type="checkbox" onChange={() => toggleComplete(todo)} checked={todo.complete} />
            <span className={`ml-1 ${todo.complete && 'complete'}`}>{todo.text}</span>
            <img width="20" src={trashIcon} alt="trash" />
        </ListGroup.Item>
    )
}

export default TodoListItem
