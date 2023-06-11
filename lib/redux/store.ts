import { configureStore } from "@reduxjs/toolkit";
import { hackerNewsAPI } from "../services/hackerNewsAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [hackerNewsAPI.reducerPath]: hackerNewsAPI.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(hackerNewsAPI.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch