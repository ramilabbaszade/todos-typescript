import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import { initialTodos } from './initialTodos';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = React.useState<Array<Todo>>(initialTodos)

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }])
  }
  const removeAllTodo = () => {
    setTodos(todos.filter(todo => todo.complete !== true))
  }
  // const removeOneTodo:RemoveOneTodo = (deletedTodo) => {
  //   console.log(deletedTodo)
  //   setTodos(todos.filter(todo => todo.text !== deletedTodo))
  // }

  return (
    <div className="App container">
      <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
        <Tab eventKey="all" title="All">
          <div className="tab_container">
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} />
          </div>
        </Tab>
        <Tab eventKey="active" title="Active">
          <div className="tab_container">
            <AddTodoForm addTodo={addTodo} />
            <TodoList isComplete={false} todos={todos} toggleComplete={toggleComplete} />
          </div>
        </Tab>
        <Tab eventKey="completed" title="Completed">
          <div className="tab_container">
            <TodoList isComplete={true} todos={todos} toggleComplete={toggleComplete} />
            <button onClick={removeAllTodo} className="btn btn-danger">delete all</button>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
