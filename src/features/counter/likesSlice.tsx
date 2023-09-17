import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likes: 0
}

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    increment(state){
        state.likes++;
    },
    decrement(state){
        state.likes++;
    }
  }
});

export const {increment, decrement} = likesSlice.actions

export default likesSlice.reducer
