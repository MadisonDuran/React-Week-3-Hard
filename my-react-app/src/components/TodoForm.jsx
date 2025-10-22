import { useState } from "react";

export default function TodoForm({ onSubmit, initial = { title: "", notes: "" } }) {
const [form, setForm] = useState(initial);
function submit(e) {
e.preventDefault();
if (!form.title.trim()) return;
onSubmit(form);
setForm({ title: "", notes: "" });
}
return (
<form onSubmit={submit} style={{ display: "grid", gap: 8 }}>
<input
placeholder="Task title"
value={form.title}
onChange={e => setForm({ ...form, title: e.target.value })}
/>
<textarea
placeholder="Notes (optional)"
value={form.notes}
onChange={e => setForm({ ...form, notes: e.target.value })}
/>
<button type="submit">Add Task</button>
</form>
);
}
