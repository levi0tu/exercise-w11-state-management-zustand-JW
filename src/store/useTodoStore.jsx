import { create } from "zustand"

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }

    set((state) => ({
      todos: [...state.todos, newTodo],
    }))
  },
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }))

  },
  completeTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo),
    }))
  },
}))
