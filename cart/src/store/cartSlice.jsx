// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   quantity:0
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state,action){
//       const {foodId,quantity,name,price,image}=action.payload;
//       const indexFoodId=(state.items).findIndex(item=>item.foodId===foodId)
//       if(indexFoodId >=0){
//       state.items[indexFoodId].quantity+=1;
//       }
//       else{
//         state.items.push({foodId,quantity,name,price,image})
//       }
//       },

//     removeFromCart(state, action) {
//       state.items = state.items.filter(item => item.foodId !== action.payload.foodId);
//     },

//     decreaseCart(state, action) {
//       const itemIndex = state.items.findIndex(item => item.foodId === action.payload.foodId);
//       if (itemIndex >= 0) {
//         if (state.items[itemIndex].quantity > 1) {
//           state.items[itemIndex].quantity -= 1;
//         } else {
//           state.items = state.items.filter(item => item.foodId !== action.payload.foodId);
//         }
//       }
//     }
//   }
// });

// export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { foodId, name, price, image, quantity = 1, gst = 0, deliveryCharges = 0, foodList = '', customerName = '', customerMobileNo = '', modeOfPayment = '', deliveryAddress = '', contactUs = '' } = action.payload;
      const indexFoodId = state.items.findIndex(item => item.foodId === foodId);
      if (indexFoodId >= 0) {
        state.items[indexFoodId].quantity += 1;
      } else {
        state.items.push({ foodId, quantity, name, price, image, gst, deliveryCharges, foodList, customerName, customerMobileNo, modeOfPayment, deliveryAddress, contactUs });
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.foodId !== action.payload.foodId);
    },

    decreaseCart(state, action) {
      const itemIndex = state.items.findIndex(item => item.foodId === action.payload.foodId);
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.foodId !== action.payload.foodId);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
