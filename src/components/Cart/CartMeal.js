import classes from "./CartMeal.module.css";

const CartMeal = ({ id, name, amount, price, onRemove, onAdd }) => {
    const mealTotal = (price*amount).toFixed(2);
	return (
		<li key={id} className={classes.li}>
			<span className={classes.name}>{name}</span>
			<span>
				<span className={classes.price}>Price: ${mealTotal}</span>
				<span className={classes.amount}>{amount}</span>
			</span>

			
		</li>
	);
};

export default CartMeal;
