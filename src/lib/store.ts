import { configureStore } from '@reduxjs/toolkit';
import toolbarReducer from '../lib/features/toolbar/toolbarSlice';
import { apiSlice } from './features/api/apiSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      toolbar: toolbarReducer,
      [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
