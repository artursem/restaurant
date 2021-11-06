import { useContext } from "react";
import sushi1 from "../../assets/sushi-1.png";
import sushi2 from "../../assets/sushi-2.png";
import sushi3 from "../../assets/sushi-3.png";
import sushi4 from "../../assets/sushi-4.png";
import CartContext from "../../store/CartContext";
import MealForm from "./MealForm";

import classes from "./MealItem.module.css";

function MealItem(props) {
	const icons = [sushi1, sushi2, sushi3, sushi4];

	const cartContext = useContext(CartContext);
	const addToCartContext = (amount) => {
		cartContext.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};

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
			<MealForm/>
		</li>
	);
}

export default MealItem;
