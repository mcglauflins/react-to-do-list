import React, {useState} from 'react'

function TodoForm() {
    const [input, setinput] = useState('')

    const handleChange = e => {
        setinput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit ({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
    }

  return (
    <div>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo" 
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    </div>
  )
}

export default TodoForm
