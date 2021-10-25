import React from "react";
import MealItem from "./MealItem";
import classes from "./Meals.module.css";

const DUMMY_MEALS = [
	{
		id: 1,
		key: 1,
		name: "nigiri",
		cost: 25,
	},
	{
		id: 2,
		key: 2,
		name: "hosomaki",
		cost: 35,
	},
	{
		id: 3,
		key: 3,
		name: "uramaki",
		cost: 25,
	},
	{
		id: 4,
		key: 4,
		name: "futomaki",
		cost: 15,
	},
];

function Meals() {
	const mealList = DUMMY_MEALS.map((meal) => {
		return <MealItem meal={meal} />;
	});

	return <ul className={classes.list}>{mealList}</ul>;
}

export default Meals;
