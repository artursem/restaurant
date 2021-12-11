import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import MealForm from "./MealForm";

import sushi1 from "../../assets/sushi-1.png";
import sushi2 from "../../assets/sushi-2.png";
import sushi3 from "../../assets/sushi-3.png";
import sushi4 from "../../assets/sushi-4.png";
import classes from "./MealItem.module.css";

function MealItem(props) {
	const dispatch = useDispatch();
	const icons = [sushi1, sushi2, sushi3, sushi4];
	
	const price = props.meal.cost.toFixed(2);
	const handleAddToCart = (amount) => {
		dispatch(cartActions.addToCart({
			id: props.meal.id, 
			name: props.meal.name,
			amount: parseInt(amount),
			price: price
		}))
	}
	return (
		<li key={props.meal.key} className={classes.item}>
			<div>
				<img
					src={icons[props.meal.id - 1]}
					alt={props.meal.name}
					className={classes.icon}
				/>
				{props.meal.name}
			</div>
			<MealForm onSubmit={handleAddToCart} />
		</li>
	);
}

export default MealItem;
