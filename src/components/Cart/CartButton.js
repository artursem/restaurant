import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css"

function CartButton(props) {
	const cartContext = useContext(CartContext);
	const badge = cartContext.items.length;

	return (
		<button className={classes.button} onClick={props.onClick} >
			<CartIcon />
			<span>{badge}</span>
		</button>
	);
}

export default CartButton;
