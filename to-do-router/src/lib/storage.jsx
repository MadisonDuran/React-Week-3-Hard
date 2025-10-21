const KEY = "todos-v1";
export const loadTodos = () => JSON.parse(localStorage.getItem)(KEY) || "[]";
export const saveTodos = (todos) => localStorage.setItem(KEY, JSON.stringify(todos));

