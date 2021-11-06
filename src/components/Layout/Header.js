import React from "react";
import Logo from "./Logo";
import CartButton from "../Cart/CartButton";
import classes from "./Header.module.css";

function Header(props) {
	return (
		<header className={classes.header}>
			<Logo />
            <ul className={classes.links}>
                <li>
                    <a href="/#">Menu</a>
                </li>
                <li>
                    <a href="/#">About us</a>
                </li>
                <li>
                    <CartButton onClick={props.onShowCart}/>
                </li>
            </ul>
		</header>
	);
}

export default Header;
