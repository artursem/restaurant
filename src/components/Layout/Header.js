import React from "react";
import Logo from "./Logo";
import CartButton from "../Cart/CartButton";
import classes from "./Header.module.css";

function Header() {
	return (
		<header className={classes.header}>
			<Logo />
            <ul className={classes.links}>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <CartButton/>
                </li>
            </ul>
		</header>
	);
}

export default Header;
