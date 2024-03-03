import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
    tasks:[],
    newTaskDescription:'',
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: v4(),
                description: action.payload,
            }
            state.tasks.push(newTask)
        }
    }
})
export default todoSlice.reducer
export const { addTask } = todoSlice.actions
