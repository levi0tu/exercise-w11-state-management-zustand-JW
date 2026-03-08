import { useTodoStore } from "../store/useTodoStore.jsx"
import { useState } from "react"

export const TodoList = () => {
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore()

  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo to your list"
      />
      <button type="submit">Add 📝</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}

            <button type="button" onClick={() => completeTodo(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </form>


  )
}
