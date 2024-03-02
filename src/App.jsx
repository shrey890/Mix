import { useState } from "react";

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [input, setinput] = useState("");
	const [editInput, setEditInput] = useState("");
	const [editid, seteditid] = useState(null);
	const addHandler = () => {
		const newTask = {
			id: Math.random().toString(36).substr(2, 9),
			text: input,
		};
		setTasks((prev) => [...prev, newTask]);
		setinput("");
	};
	const deleteHandler = (id) => {
		const deleteTasks = tasks.filter((task) => task.id !== id);
		setTasks(deleteTasks);
	};
	const editHandler = (id) => {
		const taskToEdit = tasks.find((task) => task.id === id);
		setEditInput(taskToEdit.text);
		seteditid(id);
	};
	const saveEditHandler = () => {
		const updatedTAsks = tasks.map((task) =>
			task.id === editid ? { ...task, text: editInput } : task
		);
		setTasks(updatedTAsks);
		seteditid(null);
	};
	return (
		<div>
			<div>
				<input
					type="text"
					value={input}
					onChange={(e) => setinput(e.target.value)}
				/>
				<button onClick={addHandler}>Add</button>
			</div>
			{tasks.map((task) => (
				<ul className="flex bg-slate-200 gap-4" key={task.id}>
					<li className="w-28">
						{" "}
						{task.id === editid ? (
							<input
								autoFocus
								value={editInput}
								onChange={(e) => setEditInput(e.target.value)}
							/>
						) : (
							task.text
						)}{" "}
					</li>
					<button onClick={() => deleteHandler(task.id)}>delete</button>
					{task.id === editid ? (
						<button onClick={saveEditHandler} className="border-t-neutral-600">
							save
						</button>
					) : (
						<button
							onClick={() => editHandler(task.id)}
							className="border-t-neutral-600"
						>
							edit
						</button>
					)}
				</ul>
			))}
		</div>
	);
};

export default App;
