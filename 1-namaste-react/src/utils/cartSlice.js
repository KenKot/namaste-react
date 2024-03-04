import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // items: ["burger", "pizza"],
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // a reducer function
      // we are mutating the state here
      state.items.push(action.payload);

      // in old redux, we werent suppose to mutate state
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // []
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
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
