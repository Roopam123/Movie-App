import { createSlice } from '@reduxjs/toolkit'


const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genres:{}
    // genres = category
  },
  reducers:{
    getApiConfigrations:(state,actions)=>{
        state.url = actions.payload
    },
    getGenres:(state,actions)=>{
        state.genres = actions.payload
    }
  }
})

export const { getApiConfigrations,getGenres } = homeSlice.actions
export default homeSlice.reducer