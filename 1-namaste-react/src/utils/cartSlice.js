import {createSlice, current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // items: ["burger", "pizza"],
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // in old redux, we werent suppose to mutate state:
      // ex:
      // const newState =[..state]
      // newState.items.push(action.payload)
      // return newState

      // in RTK, we HAVE to mutate the state, or return a new state
      // a reducer function
      // we are mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //how to properly log the current state
      console.log(current(state));
      state.items.length = 0; // []

      // you can also do:
      // return []
    },
  },
});

// cartSlice will be like a big object that has the following inside of it
// {
//     actions: {
//         addItem
//     },
//     reducer
// }

//ACTIONS
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
