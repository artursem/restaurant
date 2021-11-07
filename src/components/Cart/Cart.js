import { useContext } from "react";
import Modal from "../UI/Modal";
import CartMeal from "./CartMeal";
import CartContext from "../../store/CartContext";
import classes from "./Cart.module.css";

function Cart(props) {
	const cartContext = useContext(CartContext);
	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
	const isEmpty = cartContext.items.length === 0;
	const itemList = cartContext.items.map((item) => {
		return (
			<CartMeal
				key={item.id}
				name={item.name}
				amount={item.amount}
				price={item.price}
			/>
		);
	});

	const cartItems = (
		<>
			<ul className={classes.list} >{itemList}</ul>
			<span className={classes.total}>Total: <b>{totalAmount}</b></span>
		</>
	);

	return (
		<Modal onClose={props.onClose}>
			{isEmpty ? <p>Your cart is empty. Add some food!</p> : cartItems}
		</Modal>
	);
}

export default Cart;
