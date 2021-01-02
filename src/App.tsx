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

  return (
    <div className="App container">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      {/* <Tabs id="uncontrolled-tab-example">
        <Tab className="tab_container" eventKey="home" title="All">
          <h1>Tab1</h1>

          

        </Tab>


        <Tab eventKey="active" title="Active">
          <h1>Tab2</h1>
        </Tab>
        <Tab eventKey="completed" title="Completed">
          <h1>Tab3</h1>
        </Tab>
      </Tabs> */}
    </div>
  );
}

export default App;
