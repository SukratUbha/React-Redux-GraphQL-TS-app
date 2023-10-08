import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import animeReducer from './track/animeSlice'

export const store = configureStore({
  reducer: {
    anime: animeReducer
  },
});
export type AppDispatch = typeof store.dispatch
