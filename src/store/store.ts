import { configureStore } from '@reduxjs/toolkit';
import flowReducer from './flowSlice';

export const store = configureStore({
    reducer: {
        flow: flowReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // React Flow nodes/edges might contain non-serializable data (functions, etc)
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
