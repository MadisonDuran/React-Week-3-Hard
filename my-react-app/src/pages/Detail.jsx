import { useParams, Link } from "react-router-dom";
import { loadTodos } from "../lib/storage";

export default function Detail() {
const { id } = useParams();
const todo = loadTodos().find(t => t.id === id);
if (!todo) return <main style={{ padding: 16 }}><p>Task not found. <Link to="/">Go Home</Link></p></main>;
return (
<main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
<Link to="/">← Back</Link>
<h1>{todo.title}</h1>
{todo.notes && <p>{todo.notes}</p>}
<p><strong>Status:</strong> {todo.done ? "Done" : "Open"}</p>
</main>
);
}
