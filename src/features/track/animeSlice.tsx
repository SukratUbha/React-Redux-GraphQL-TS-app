import { createSlice } from '@reduxjs/toolkit'
import { animeType } from '../../Components/Search';

export type stateType = {
    anime: animeType[],
    lCounter: { [id: number]: number }
}
const initialState = {
    anime: [],
    lCounter: {}
} as stateType


const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        addLike: (state, action) => {
            console.log(action)
        },
        setAnime: (state, action) => {
            state.anime = action.payload;
        }
    }
});

export const { addLike, setAnime } = animeSlice.actions

export default animeSlice.reducer