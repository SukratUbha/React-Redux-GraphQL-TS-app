import { createSlice } from '@reduxjs/toolkit'
import { animeType } from '../../components/Home';

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
            if(state.lCounter[action.payload] === undefined){
                state.lCounter[action.payload] = 1
            }
            else{
                state.lCounter[action.payload]++
            }
        },
        dislike: (state, action) => {
            if(state.lCounter[action.payload] === undefined){
                state.lCounter[action.payload] = -1
            }
            else{
                state.lCounter[action.payload]--
            }
        },
        setAnime: (state, action) => {
            state.anime = action.payload;
        }
    }
});

export const { addLike, dislike, setAnime } = animeSlice.actions

export default animeSlice.reducer