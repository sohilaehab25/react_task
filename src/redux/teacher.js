import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllTeachers, AddTeacher, UpdateTeacher, GetTeacherById } from '../api/teacherApi';

const initialState = {
    teachers: [],
    isLoading: false,
    error: null,
};

export const getTeacherById = createAsyncThunk(
    "teacher/getTeacherById",
    async (_id, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await GetTeacherById(_id);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addTeacher = createAsyncThunk(
    "teacher/addTeacher",
    async (teacher, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await AddTeacher(teacher);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const editTeacher = createAsyncThunk(
    "teacher/editTeacher",
    async ({ teacher, _id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await UpdateTeacher(teacher, _id);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllTeachers = createAsyncThunk(
    "teacher/getAllTeachers",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await GetAllTeachers();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {},
    teacherDetails: null,
    extraReducers: (builder) => {
        builder
            .addCase(getAllTeachers.fulfilled, (state, action) => {
                state.teachers = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllTeachers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTeachers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getTeacherById.fulfilled, (state, action) => {
                state.selectedTeacher = action.payload;
                state.isLoading = false;
            })
            .addCase(addTeacher.fulfilled, (state, action) => {
                state.teachers.push(action.payload);
                state.isLoading = false;
            })
            .addCase(getTeacherById.pending, addTeacher.pending, editTeacher.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTeacherById.rejected, addTeacher.rejected, editTeacher.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(editTeacher.fulfilled, (state, action) => {
                const updatedTeacher = action.payload;
                state = {
                    ...state,
                    teachers: state.teachers.map(teacher =>
                        teacher._id === updatedTeacher._id ? updatedTeacher : teacher
                    ),
                    isLoading: false
                };
            });
            
    }
});


export const teacherReducer = teacherSlice.reducer;
export const teacherActions = teacherSlice.actions;
