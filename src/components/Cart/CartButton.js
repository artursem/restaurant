import { useSelector } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

function CartButton(props) {
	const cartState = useSelector(state => state.cart.items)
	// const badge = cartState.length;
	const badge = cartState.reduce((total, item)=>{
		return total + parseInt(item.amount)
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<CartIcon />
			<span>{badge}</span>
		</button>
	);
}

export default CartButton;
