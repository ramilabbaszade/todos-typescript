import React from 'react'
import TodoListItem from './components/TodoListItem'

interface TodoListProps {
    todos: Array<Todo>
    toggleComplete: ToggleComplete
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleComplete
}) => {
    return (
        <ul>
            {todos.map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
            })}
        </ul>
    )
}

export default TodoList
