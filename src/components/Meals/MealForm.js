import { useState, useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
	const [isValid, setisValid] = useState(true);
    const amountRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;

        if ( enteredAmount.length === 0 || enteredAmount > 5 || enteredAmount < 1) {
            setisValid(false)
        } else {
            setisValid(true)
            console.log('submit!', enteredAmount);
        }
    }
    

	return (
		<form onSubmit={handleSubmit} className={classes.form} >
			<Input
				ref={amountRef}
				label="Amount"

				input={{
					id: "amount_" + props.id,
					type: "number",
					min: 1,
					max: 5,
					step: 1,
				}}
			/>
			<button className={classes.button}>+</button>
		</form>
	);
};

export default MealForm;
