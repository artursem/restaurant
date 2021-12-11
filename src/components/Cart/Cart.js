import { useSelector } from "react-redux"

import Modal from "../UI/Modal";
import CartMeal from "./CartMeal";
import classes from "./Cart.module.css";

function Cart(props) {
	const cartState = useSelector(state=> state.cart)
	const totalAmount = `$${cartState.totalAmount.toFixed(2)}`;


	const isEmpty = cartState.items.length === 0;
	const itemList = cartState.items.map((item) => {
		return (
			<CartMeal
				key={item.id}
				id={item.id}
				name={item.name}
				amount={item.amount}
				price={item.price}
			/>
		);
	});

	const cartItems = (
		<div>
			<ul className={classes.list} >{itemList}</ul>
			<span className={classes.total}>Total: <b>{totalAmount}</b></span>
		</div>
	);

	return (
		<Modal onClose={props.onClose}>
			{isEmpty ? <p className={classes.msg}>Your cart is empty. Add some food!</p> : cartItems}
            {isEmpty || <div className={classes.buttons} >
                <button className={classes.btnSecondary} onClick={props.onClose} >
                    Close
                </button>
                <button className={classes.btnPrimary} >
                    Order
                </button>
            </div>}
		</Modal>
	);
}

export default Cart;
