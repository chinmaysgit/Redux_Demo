import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increament: (state, action) => {
            state.count+=1;
        },
        decreament: (state, action) => {
            state.count-=1;
        },
        increamentBy: (state, action) => {
            state.count += action.payload
        }
    }
})

export const {increament, decreament, increamentBy} = counterSlice.actions;

export default counterSlice.reducer;
