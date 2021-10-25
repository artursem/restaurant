import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css"

function CartButton(props) {
	return (
		<button className={classes.button}>
			<CartIcon />
			<span>3</span>
		</button>
	);
}

export default CartButton;
