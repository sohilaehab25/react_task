import { configureStore } from "@reduxjs/toolkit";
import { teacherReducer } from "./teacher";
import { ChildrenReducer } from "./ChildrenSlice";

export const nursery = configureStore({
    reducer: {
        teacherSlice: teacherReducer,
        ChildrenSlice: ChildrenReducer,
    },
});
