import { useSelector, useDispatch } from "react-redux"
import { cartActions } from "../../store";
import Modal from "../UI/Modal";
import CartMeal from "./CartMeal";
import classes from "./Cart.module.css";

function Cart(props) {
	const cartState = useSelector(state=> state.cart)
	const dispatch = useDispatch();
	const totalAmount = `$${cartState.totalAmount.toFixed(2)}`;

    const handleCartItemAdd = item => {
        dispatch(cartActions.addToCart(item))
    }
    const handleCartItemRemove = id => {
        dispatch(cartActions.removeFromCart(id))
    }
	const isEmpty = cartState.items.length === 0;
	const itemList = cartState.items.map((item) => {
		return (
			<CartMeal
				key={item.id}
				name={item.name}
				amount={item.amount}
				price={item.price}
                onAdd={handleCartItemAdd}
                onRemove={handleCartItemRemove}
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
