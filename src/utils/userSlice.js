import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
       username:"default",
    },
    reducers:{
        adduser:(state,action)=>{
            state.username=action.payload;

        },
    }

})
export const {adduser}=userSlice.actions;
export default userSlice.reducer;

