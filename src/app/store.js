import { configureStore } from "@reduxjs/toolkit";
import { unsplashApiSlice } from "./api/unsplashApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [unsplashApiSlice.reducerPath]: unsplashApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashApiSlice.middleware),
});

setupListeners(store.dispatch);
