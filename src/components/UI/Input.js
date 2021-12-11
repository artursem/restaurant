import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
	return (
		<span className={classes.input}>
			<label htmlFor={props.input.id}>Amount: </label>
			<input
				ref={ref}
				{...props.input}
				placeholder="0"
			/>
		</span>
	);
});

export default Input;
