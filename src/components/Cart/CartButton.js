import { useSelector } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

function CartButton(props) {
	const cartState = useSelector(state => state.cart.items)
	const badge = cartState.length;

	return (
		<button className={classes.button} onClick={props.onClick}>
			<CartIcon />
			<span>{badge}</span>
		</button>
	);
}

export default CartButton;
