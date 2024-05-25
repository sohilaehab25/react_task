import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    ChildrenCount: 0,
};

const ChildrenSlice = createSlice({
    name: "child",
    initialState,
    reducers: {
        increase: (state, action) => {
            state.ChildrenCount += action.payload;
        },
    },
});

export const { increase } = ChildrenSlice.actions;
export const ChildrenReducer = ChildrenSlice.reducer;
