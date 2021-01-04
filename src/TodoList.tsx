import React from 'react'
import { ListGroup } from 'react-bootstrap'
import TodoListItem from './components/TodoListItem'

interface TodoListProps {
    todos: Array<Todo>
    toggleComplete: ToggleComplete
    isComplete?: Boolean
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleComplete,
    isComplete,
}) => {
    return (
        <ListGroup variant="flush">
            {isComplete ? todos.filter(todo => todo.complete === true).map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
            }) : isComplete === false ? todos.filter(todo => todo.complete === false).map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
            }) : todos.map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
            })}
        </ListGroup>
    )
}

export default TodoList
