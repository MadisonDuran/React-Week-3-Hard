import { useParams, Link, useNavigate } from "react-router-dom";
import { loadTodos, saveTodos } from "../lib/storage";
import TodoForm from "../components/TodoForm";

export default function Edit() {
const { id } = useParams();
const nav = useNavigate();
const todos = loadTodos();
const todo = todos.find(t => t.id === id);
if (!todo) return <main style={{ padding: 16 }}><p>Task not found. <Link to="/">Go Home</Link></p></main>;

function update(updated) {
const next = todos.map(t => t.id === id ? { ...t, ...updated } : t);
saveTodos(next);
nav(`/todo/${id}`);
}

return (
<main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
<Link to="/">← Back</Link>
<h1>Edit Task</h1>
<TodoForm onSubmit={update} initial={{ title: todo.title, notes: todo.notes || "" }} />
</main>
);
}
