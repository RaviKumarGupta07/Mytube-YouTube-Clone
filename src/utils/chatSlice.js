import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_API } from "./constant";
const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            if(state.messages.length>OFFSET_LIVE_API) state.messages.shift() ;
            state.messages.push(action.payload);
        },
    }

})

export const {addMessage} = chatSlice.actions ;
export default chatSlice.reducer ;
