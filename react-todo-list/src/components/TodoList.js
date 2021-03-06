import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const removeTodo = id => {
     const removeArr = [...todos].filter(todo => todo.id !== id)

     setTodos(removeArr);

    };


    const completeTodo = id => {
        let updatedTodos = todo.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todoisComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    };

  return (
    <div>
    <div class="paper"></div>
    <h1>Sarah's To Do List!</h1>
    <TodoForm onSubmit = {addTodo} />
    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList