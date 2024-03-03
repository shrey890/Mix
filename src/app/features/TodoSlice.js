import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
    tasks: [

    ],
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: v4(),
                label: action.payload
            }
            state.tasks.push(newTask)
        },
        deleteTask: (state, action) => {
            const taskId = action.payload
            state.tasks = state.tasks.filter((task) => task.id !== taskId)
        },
        editTask: (state, action) => {
            const { id, label } = action.payload
            const taskToEdit = state.tasks.find((task) => task.id === id)
            if (taskToEdit) {
                taskToEdit.label = label
            }
        }

    },
})
export const { addTask, deleteTask, editTask } = todoSlice.actions
export default todoSlice.reducer