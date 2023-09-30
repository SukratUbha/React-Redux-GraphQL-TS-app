import { createSlice } from '@reduxjs/toolkit'
import { animeType } from '../../Components/Search';
type stateType={
  likes:number,
  anime:animeType
}
const initialState = {
    likes: 0,
    anime: {}
} as stateType

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    increment(state){
        state.likes++;
    },
    decrement(state){
        state.likes++;
    },
    setAnime(state, payload){
      state.anime = {...payload.payload}
    },

  }
});

export const {increment, decrement, setAnime} = likesSlice.actions

export default likesSlice.reducer
