import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import likesReducer from './counter/likesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    likes: likesReducer
  },
});

