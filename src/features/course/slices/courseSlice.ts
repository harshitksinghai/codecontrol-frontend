import { createSlice } from "@reduxjs/toolkit";

interface CourseState {
    placeholder: string | null;
}

const initialState: CourseState = {
    placeholder: "placeholder",
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    
});

export const {} = courseSlice.actions;
export default courseSlice.reducer;