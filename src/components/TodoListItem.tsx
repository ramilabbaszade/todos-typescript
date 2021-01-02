import React from 'react'

interface TodoListItemProps {
    todo: Todo,
    toggleComplete: ToggleComplete;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleComplete
}) => {
    return (
        <li>
            <input type="checkbox" onChange={()=>toggleComplete} checked={todo.complete} />
            {todo.text}
        </li>
    )
}

export default TodoListItem
