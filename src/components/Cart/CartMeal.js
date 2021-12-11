import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import classes from "./CartMeal.module.css";

const CartMeal = ({ id, name, amount, price }) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(cartActions.addToCart({
			id,
			name,
			amount: 1,
			price,
		}))
	}

	const handleRemoveFromCart = () => {
		dispatch(cartActions.removeFromCart(id))
	}

    const mealTotal = (price*amount).toFixed(2);
	return (
		<li key={id} className={classes.li}>
			<span className={classes.name}>{name}</span>
			<span>
				<span className={classes.price}>Price: ${mealTotal}</span>
                <button onClick={handleRemoveFromCart} >-</button>
				<span className={classes.amount}>{amount}</span>
                <button onClick={handleAddToCart} >+</button>
			</span>

			
		</li>
	);
};

export default CartMeal;
