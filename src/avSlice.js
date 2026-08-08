import { createSlice } from "@reduxjs/toolkit";
import projectorImg from "./projector.png";
import speakerImg from "./speakers.png";
import micImg from "./mic.png";
import whiteboardImg from "./whiteboard.png";
import signageImg from "./signage.png";


export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
		img: projectorImg,
		name: "Projectors",
		cost: 200,
		quantity: 0,
	},
    {
		img: speakerImg,
		name: "Speaker",
		cost: 35,
		quantity: 0,
    },
    {
		img: micImg,
		name: "Microphones",
		cost: 45,
		quantity: 0,
    },
    {
		img: whiteboardImg,
		name: "Whiteboards",
		cost: 80,
		quantity: 0,
    },

    {
		img: signageImg,
		name: "Signage",
		cost: 80,
		quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
      
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0)  {
            item.quantity--;
        }
    },
  },
});


export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
