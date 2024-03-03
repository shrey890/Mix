import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./app/features/TodoSlice";
import { useState } from "react";

const App = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.todo.tasks);
	const [input, setInput] = useState("");
	const addHandler = () => {
		if (input.trim() !== "") {
			dispatch(addTask(input));
			setInput("");
		}
	};
	const inputChangeHandler = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={inputChangeHandler}
				placeholder="add task"
			/>
			<button onClick={addHandler}>Add</button>
			<div>
				{tasks.map((task) => (
					<li key={task.id}>{task.description}</li>
				))}
			</div>
		</div>
	);
};

export default App;
