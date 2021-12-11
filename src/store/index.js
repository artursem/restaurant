import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCart = {
	items: [],
	totalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCart,
	reducers: {
		addToCart(state, action) {
            const itemIdx = state.items.findIndex(item => item.id === action.payload.id);
            if(itemIdx < 0) {
                state.items.push(action.payload)
            } else {
                state.items[itemIdx].amount = parseInt(action.payload.amount) + parseInt(state.items[itemIdx].amount)
            }
            
            state.totalAmount = state.items.reduce((total, item) => {
                return total + parseFloat(item.price) * parseInt(item.amount)
            }, 0)
		},
		removeFromCart(state, action) {
            const itemIdx = state.items.findIndex(item => item.id === action.payload);
            if (state.items[itemIdx].amount === 1) {
                state.items = state.items.filter(item => item.id !== action.payload)
            } else (
                state.items[itemIdx].amount --
            )
		},
	},
});

const initialModal = {showModal: false};

const modalSlice = createSlice({
	name: "modal",
	initialState: initialModal,
	reducers: {
		showModal(state) {
			state.showModal = true;
		},
		hideModal(state) {
			state.showModal = false;
		},
	},
});

const store = configureStore({
	reducer: { 
        cart: cartSlice.reducer, 
        modal: modalSlice.reducer 
    }
});

export const cartActions = cartSlice.actions;
export const modalActions = modalSlice.actions;
export default store;
