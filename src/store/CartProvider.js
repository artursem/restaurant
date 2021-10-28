import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const CART = {
	ADD: "cart-add",
	REMOVE: "cart-remove",
};

const cartReducer = (state, action) => {
    switch (action) {
        case CART.ADD:
            console.log('add item');
            return defaultCartState;

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
		dispatchCartAction({ action: CART.ADD, payload: item });
	};

	const handleRemoveItemFromCart = (id) => {
		dispatchCartAction({
			action: CART.REMOVE,
			payload: id,
		});
	};

	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: (item) => {},
		removeItem: (id) => {},
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
