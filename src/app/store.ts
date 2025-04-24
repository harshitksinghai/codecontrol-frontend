import { combineSlices, configureStore } from "@reduxjs/toolkit";
import courseReducer from '../features/course/slices/courseSlice';
import { courseApiSlice } from "../features/course/slices/courseApiSlice";

const rootReducer = combineSlices({
    course: courseReducer,
    [courseApiSlice.reducerPath]: courseApiSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware();
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
