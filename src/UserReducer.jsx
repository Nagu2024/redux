import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userslice = createSlice({

    name:'users',
    initialState: userList,
    reducers:{
        addusers:(state,action) =>{
                state.push(action.payload);
               
              const c = state.users;
              console.log(c);
          
        },
        editUsers:(state,action) =>{
            
           const {id, name, phone, age} = action.payload;
           const uu = state.find(user=> user.id==id);
           if (uu) {

                uu.name = name;
                uu.mobile = phone;
                uu.age = age;

           }
       
        },
        deleteUsers:(state,action) =>{
            
            const {id} = action.payload;
            const uu = state.find(user => user.id==id)
            if (uu) {
                
                return state.filter(f=> f.id!=id);
            }
            
      
    },
  }
    
})



export const {addusers,editUsers, deleteUsers} = userslice.actions;

export default userslice.reducer;

