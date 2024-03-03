import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "./app/features/TodoSlice";
import { useState } from "react";

const App = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todo.tasks);
	const [input, setInput] = useState("");
	const [editedTask, setEditedTask] = useState({ id: null, label: "" });
	const addHandler = () => {
		dispatch(addTask(input));
		setInput("");
	};
	const delteHandler = (id) => {
		dispatch(deleteTask(id));
	};
	const editHandler = () => {
        dispatch(editTask(editedTask));
        setEditedTask({ id: null, label: "" }); // Reset editedTask state
    };

    const handleEditChange = (e, id) => {
        setEditedTask({ id, label: e.target.value });
    };
	return (
		<div>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type="text"
				placeholder="task..."
			/>
			<button onClick={addHandler}>add</button>
			<ul>
			{todos.map((todo) => (
                    <div key={todo.id}>
                        {editedTask.id === todo.id ? (
                            <div>
                                <input
                                    value={editedTask.label}
                                    onChange={(e) => handleEditChange(e, todo.id)}
                                    type="text"
                                />
                                <button onClick={editHandler}>save</button>
                            </div>
                        ) : (
                            <div>
                                <span>{todo.label}</span>
                                <button onClick={() => setEditedTask({ id: todo.id, label: todo.label })}>edit</button>
                            </div>
                        )}
                        <button onClick={() => delteHandler(todo.id)}>delete</button>
                    </div>
                ))}
			</ul>
		</div>
	);
};

export default App;
