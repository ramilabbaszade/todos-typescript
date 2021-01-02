import React, { FormEvent } from 'react'

interface AddTodoFormProps {
    addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = React.useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }
    return (
        <div>
            <form>
                <input value={newTodo} onChange={handleChange} type="text" placeholder="add details" />
                <button className="mt-2" onClick={handleSubmit} type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm
