import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadTodos, saveTodos } from "../lib/storage";
import TodoForm from "../components/TodoForm";

export default function List() {
const [todos, setTodos] = useState(loadTodos());
const nav = useNavigate();

useEffect(() => saveTodos(todos), [todos]);

function addTodo(t) { setTodos([{ id: crypto.randomUUID(), ...t, createdAt: Date.now(), done: false }, ...todos]); }
function toggle(id) { setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t)); }
function remove(id) { setTodos(todos.filter(t => t.id !== id)); }

return (
<main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
<h1>My Tasks</h1>
<TodoForm onSubmit={addTodo} />
<ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
{todos.map(t => (
<li key={t.id} style={{ display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid #eee", padding: "8px 0" }}>
<input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
<Link to={`/todo/${t.id}`} style={{ textDecoration: t.done ? "line-through" : "none" }}>{t.title}</Link>
<div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
<button onClick={() => nav(`/todo/${t.id}/edit`)}>Edit</button>
<button onClick={() => remove(t.id)}>Delete</button>
</div>
</li>
))}
</ul>
</main>
);
}
