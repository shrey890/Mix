import { useState } from "react";

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");
	const addHandler = () => {
		setTasks([...tasks, input]);
		setInput("");
	};
	const removeHandler = (index) => {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
	};
	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={addHandler}>Add</button>
			<div>
				{tasks.length > 0 ? (
					tasks.map((task, index) => (
						<>
							<li key={index}> {task}</li>
							<button onClick={()=>removeHandler(index)}>delete</button>
						</>
					))
				) : (
					<h1>no task</h1>
				)}
			</div>
		</div>
	);
};

export default App;
