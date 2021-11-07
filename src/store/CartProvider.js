import { useReducer } from "react";
import CartContext from "./CartContext";

const CART = {
	ADD: "cart-add",
	REMOVE: "cart-remove",
};

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case CART.ADD:
			const updatedTotalAmount =
				state.totalAmount + action.payload.price * action.payload.amount;
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);
			const existingCartItem = state.items[existingCartItemIndex];
			let updatedItems;

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem, 
					amount: existingCartItem.amount + action.payload.amount,
				};
				updatedItems = [...state.items]
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems = state.items.concat(action.payload)
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		// case CART.REMOVE:
		
		default:
			return defaultCartState;
	}
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const handleAddItemToCart = (item) => {
		dispatchCartAction({ type: CART.ADD, payload: item });
	};

	const handleRemoveItemFromCart = (id) => {
		dispatchCartAction({
			type: CART.REMOVE,
			payload: id,
		});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: handleAddItemToCart,
		removeItem: handleRemoveItemFromCart,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
